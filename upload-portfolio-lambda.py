import json
import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    s3 = boto3.resource('s3')

    portfolio_bucket = s3.Bucket('js-react-portfolio')
    build_bucket = s3.Bucket('js-react-portfolio-build')
    
    portfolio_zip = StringIO.StringIO()
    # Downloading portfolioBuild.zip from the build bucket and storing it in memory instead of file system.
    build_bucket.download_fileobj('portfolioBuild.zip', portfolio_zip)
    
    # Looping through and extracting the objects in portfolioBuild.zip and uploading them to portfolio bucket.
    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj, nm, 
            ExtraArgs = {'ContentType': mimetypes.guess_type(nm)[0]})
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
