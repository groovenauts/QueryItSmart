# What is it?

With this demo, we featured [BigQuery](http://cloud.google.com/bigquery), a fast, economical and fully-managed data 
warehouse for large-scale data analytics, combined with Cloud Machine Learning Engine 
([ML Engine](http://cloud.google.com/ml)), a managed and scalable machine learning platform.

## BigQuery democratizes data

With the petabit network and large-scale container technology deployed in our datacenters, BigQuery can collect 
fractions of computing power, memory and storage quickly from thousands of machines, fabricating them as a Massively 
Parallel Processing (MPP) engine for every single SQL query running on the service.

With this unique architecture, BigQuery frees you from the typical headaches of data processing and provides high 
performance, lower cost, better management and  ease-of-access. Queries on terabytes of data finishes in tens of 
seconds with the economy of cloud, so you can run various ad-hoc queries quickly and iteratively. 

BigQuery allows everyone in an enterprise to easily access the real-time production data with their own SQL or 
BI tools, because any slow query or error doesn't affect the performance and availability of the whole service. 
Non-engineers and business users can own the data. 

## Cloud Machine Learning adds “smart” search on BigQuery

With the QueryIt Smart demo, we added one more flavor to BigQuery, which is the smartness of Machine Learning.

The traditional SQL data warehouse has been optimized for structured data with programmable logic, but it’s not as 
strong at handling unstructured data with the "senses" or "instincts" of humans. 

This is where machine learning can help. By designing a deep neural network for image recognition with TensorFlow and 
training it with Cloud Machine Learning Engine, you can have a model (consists of a bunch of parameters) that captures 
how humans use their senses and instincts to recognize images correctly. Once the training is finished, you can use 
the model in various runtime environments. For example, you could use Machine Engine's prediction service to build a 
large scale online service or to run batch processing, or you can run TensorFlow prediction inside smartphones and 
Raspberry Pi for high-quality image recognition in edge devices.

In the QueryIt Smart installation, we used the [User Defined Function (UDF)](https://cloud.google.com/bigquery/docs/reference/standard-sql/user-defined-functions) 
of BigQuery to run the image recognition with a deep neural network model trained by ML Engine. Because the JavaScript 
code written with UDF runs with the same MPP architecture of BigQuery, we could take advantage of the massive computing 
power for a large-scale machine learning prediction.

By using UDF, we have implemented the following applications:

- **Document similarity search**: extracting feature vectors (TF-IDF) of 10M documents from Stack Overflow posts and use UDF to 
compare similarity between documents in tens of seconds
- **Image similarity search**: extracting feature vectors of 1M images from Wikimedia Commons by appling CNN (VGG16) with
ML Engine, import them to Google Cloud Storage, and use them with UDF to compare similarity between images in tens of seconds
- **Large scale demand forecast**: training Multi Layer Perceptron (MLP) for NYC Citi Bike demand forecast with ML Engine, 
import them to Google Cloud Storage, and apply them to hundreds of different location in Manhattan in parallel by 
implementing MLP prediction with UDF.

Please see the source code for more detail.


