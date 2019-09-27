import json
import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    # creating names for the resources
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:928335481473:deploy-portfolio-topic')
    
    try:
        #s3 = boto3.resource('s3', config = Config(signature_version = 's3v4'))
        s3 = boto3.resource('s3')
        # names for the s3 buckets
        portfolio_bucket = s3.Bucket('js-react-portfolio')
        build_bucket = s3.Bucket('js-react-portfolio-build')
        
        # StringIO is used to have files that are only kept in memory, 
        # and never put in your file system. Can access files straight from
        # memory and not from file system.
        portfolio_zip = StringIO.StringIO()
        # ('name of file', 'StringIO instead of destination in the file system').
        # Now portfolio_zip is portfoliobuild.zip in memory, not in file system.
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)
        
        # Unzipping the portfoliobuild.zip file in js-react-portfolio-build bucket
        with zipfile.ZipFile(portfolio_zip) as myzip:
            # iterate through each file in the zip
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                # setting the acl for each file uploaded to public access.
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
         
        print "Job is done!"
        # topic.publish(Message="Portfolio was deployed successfully", PhoneNumber="+16784675209")
        topic.publish(Subject="Success", Message="Portfolio was deployed successfully", )
         
    except:
        # topic.publish(Message="Portfolio was not successfully deployed", PhoneNumber="+16784675209")
        topic.publish(Subject="Failure", Message="Portfolio was not successfully deployed", )
        raise
         
         
         
         
            
    return {
        'statusCode': 200,
        'body': 'Code update was successful!!'
    }



