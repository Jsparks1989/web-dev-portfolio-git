import json
import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    
    # This location is outside the scope of the 'if job:' statement.
    location = {
        'bucketName':'js-react-portfolio-build',
        'objectKey':'portfolioBuild.zip'
    }
    try: 
        # Getting the job object from the event object.
        job = event.get('CodePipeline.job')
        print 'The job is ' + str(job)
        
        # if this function isnt invoked by codepipeline, there wont be a 'job'.
        if job:
            # Looping through artifacts in inputArtifacts from Event Object.
            # CodePipeline.job > data > inputArtifacts
            for artifact in job['data']['inputArtifacts']:
                # if the artifact name is BuildArtif...
                print "the artifact name is " + str(artifact['name'])
                if artifact['name'] == 'BuildArtifact':
                    # setting location to inputArtifacts > location > s3Location
                    location = artifact['location']['s3Location']
        # print is always included in the logs
        print "Building portfolio from " + str(location)
        s3 = boto3.resource('s3')
    
        portfolio_bucket = s3.Bucket('js-react-portfolio')
        build_bucket = s3.Bucket(location['bucketName'])
        
        portfolio_zip = StringIO.StringIO()
        # Downloading portfolioBuild.zip from the build bucket and storing it in memory instead of file system.
        build_bucket.download_fileobj(location['objectKey'], portfolio_zip)
        
        # Looping through and extracting the objects in portfolioBuild.zip and uploading them to portfolio bucket.
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, 
                ExtraArgs = {'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        print "Job is done successfully!!"
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job['id'])
        return {
            'statusCode': 200,
            'body': json.dumps('Hello from Lambda!')
        }
    except:
        print "Job was not done"
        
