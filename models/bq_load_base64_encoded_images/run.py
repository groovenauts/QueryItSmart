import argparse
import json
import logging

import apache_beam as beam

class Encode64DoFn(beam.DoFn):
    def __init__(self):
        super(Encode64DoFn, self).__init__()
        self.client = None
        self.bucket = None

    def process(self, element, project_id, bucket_name, prefix):
        import base64
        from google.cloud import storage as gcs
        key = element["key"]
        name = prefix + "/" + key + ".jpg"
        result = {}
        result["key"] = key
        if self.client == None:
            self.client = gcs.Client(project_id)
        if self.bucket == None:
            self.bucket = self.client.get_bucket(bucket_name)
        blob = gcs.Blob(name, self.bucket)
        result["image_base64"] = base64.urlsafe_b64encode(blob.download_as_string())
        return [result]

def run(argv=None):
    parser = argparse.ArgumentParser()
    parser.add_argument("--gcs-project-id", dest="project_id", required=True,
            help='GCP Project ID.')
    parser.add_argument("--input-table", dest="input_table", required=True,
            help='Input BigQuery table name.')
    parser.add_argument("--output-table", dest="output_table", required=True,
            help="Output BigQuery table name.")
    parser.add_argument("--image-bucket", dest="image_bucket", required=True,
            help="Bucket name contains images.")
    parser.add_argument("--image-prefix", dest="image_prefix", required=True,
            help="GCS object name prefix.")
    known_args, pipeline_args = parser.parse_known_args(argv)

    p = beam.Pipeline(argv=pipeline_args)
    schema = 'key:STRING, image_base64:STRING'
    images = p | 'ReadFromBQ' >> beam.io.Read(beam.io.BigQuerySource(known_args.input_table))
    b64encode = images | 'Encode64' >> beam.ParDo(Encode64DoFn(), known_args.project_id, known_args.image_bucket, known_args.image_prefix)
    b64encode | 'OutputToBQ' >> beam.io.Write(beam.io.BigQuerySink(
        known_args.output_table,
        schema=schema,
        create_disposition=beam.io.BigQueryDisposition.CREATE_IF_NEEDED,
        write_disposition=beam.io.BigQueryDisposition.WRITE_TRUNCATE))

    p.run()

if __name__== '__main__':
    logging.getLogger().setLevel(logging.INFO)
    run()
