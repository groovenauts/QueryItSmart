import argparse
import json
import logging

import apache_beam as beam

class JoinWordsDoFn(beam.DoFn):
    def __init__(self):
        super(JoinWordsDoFn, self).__init__()

    def process(self, element):
        words = element["words"]
        text = " ".join(words)
        result = {}
        result["id"] = element["id"]
        result["text"] = text
        return [ result ]

def run(argv=None):
    parser = argparse.ArgumentParser()
    parser.add_argument("--input-table", dest="input_table", required=True,
            help='Input BigQuery table name.')
    parser.add_argument("--output-table", dest="output_table", required=True,
            help="Output BigQuery table name.")
    known_args, pipeline_args = parser.parse_known_args(argv)

    p = beam.Pipeline(argv=pipeline_args)
    schema = 'key:INTEGER, text:STRING'
    words = p | 'ReadFromBQ' >> beam.io.Read(beam.io.BigQuerySource(known_args.input_table))
    joined = words | 'JoinWords' >> beam.ParDo(JoinWordsDoFn())
    joined | 'OutputToBQ' >> beam.io.Write(beam.io.BigQuerySink(
        known_args.output_table,
        schema=schema,
        create_disposition=beam.io.BigQueryDisposition.CREATE_IF_NEEDED,
        write_disposition=beam.io.BigQueryDisposition.WRITE_TRUNCATE))

    p.run()

if __name__== '__main__':
    logging.getLogger().setLevel(logging.INFO)
    run()
