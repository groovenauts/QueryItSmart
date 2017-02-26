import _ from 'lodash';

export const QUERY = {
  load: {
    sql: "SELECT key, original_url, rand() as rand FROM `wikimedia.image_vectors` ORDER BY rand LIMIT 70",
  },
  similar: {
    sql: _.template(`CREATE TEMPORARY FUNCTION distance(v1 ARRAY<FLOAT64>,
    v2 ARRAY<FLOAT64>)
  RETURNS FLOAT64
  LANGUAGE js AS """
              var dist = 0.0
              for (var i=0; i < v1.length; i++) {
                dist += (v1[i] - v2[i])**2
              }
              return Math.sqrt(dist);
            """;
SELECT
  a.key,
  distance(a.vector,
    b.vector) AS dist,
  original_url
FROM (
  SELECT
    key,
    vector,
    original_url
  FROM
    \`wikimedia.image_vectors\`) AS a
CROSS JOIN (
  SELECT
    vector
  FROM
    \`wikimedia.image_vectors_1\`
  WHERE
    key = "<%= id %>") AS b
ORDER BY
  dist ASC
LIMIT
  50`)
  },
  hackerNews: {
    sql: _.template(`  CREATE TEMPORARY FUNCTION prod(v1 ARRAY<FLOAT64>,
    v2 ARRAY<FLOAT64>)
  RETURNS FLOAT64
  LANGUAGE js AS """
              var d = 0.0
              for (var i=0; i < v1.length; i++) {
                d += (v1[i] * v2[i])
              }
              return d;
            """;
SELECT
  id,
  prod(a.vector,
    b.vector) AS similarity,
  title,
  text
FROM (
  SELECT
    id,
    title,
    text,
    vector
  FROM
    \`queryit-smart.hackernews.stories_with_vector\`) AS a
CROSS JOIN (
  SELECT
    vector
  FROM
    \`queryit-smart.hackernews.stories_with_vector\`
  WHERE
    id = <%= id %>
  LIMIT
    1) AS b
ORDER BY
  similarity DESC
LIMIT
  10`)
  },
  stackOverflow: {
    sql: _.template(`CREATE TEMPORARY FUNCTION
  calc_similarity(tf_idf_json_0 STRING,
    tf_idf_json_1 STRING)
  RETURNS FLOAT64
  LANGUAGE js AS """
// parse JSON to extract tf_idf
var tf_idf_0 = JSON.parse(tf_idf_json_0);
var tf_idf_1 = JSON.parse(tf_idf_json_1);
// calculate cosine similarity
var similarity = 0;
for (word in tf_idf_0) {
  var t0 = tf_idf_0[word] ? Number(tf_idf_0[word]) : 0;
  var t1 = tf_idf_1[word] ? Number(tf_idf_1[word]) : 0;
  similarity += t0 * t1;
}
return similarity;
""";
SELECT
  id,
  title,
  body,
  tags,
  similarity
FROM (
  SELECT
    t1.id,
    calc_similarity(tf_idf_0,
      t1.tf_idf) AS similarity
  FROM (
    SELECT
      tf_idf AS tf_idf_0
    FROM
      \`queryit-smart.stackoverflow.top3M_posts_tf_idf\` AS t0
    WHERE
      id = <%= id %> )
  CROSS JOIN
    \`queryit-smart.stackoverflow.top100K_posts_tf_idf\` AS t1
  ORDER BY
    similarity DESC
  LIMIT
    10 )
JOIN
  \`queryit-smart.stackoverflow.top3M_posts\` AS t2
USING
  (id)
ORDER BY
  similarity DESC`)
  },
  citibike: {
    sql: _.template(`CREATE TEMPORARY FUNCTION usage(month INT64,
    wday INT64,
    hour INT64,
    station_id INT64,
    latitude FLOAT64,
    longitude FLOAT64,
    temp FLOAT64,
    weather INT64)
  RETURNS FLOAT64
  LANGUAGE js AS """  
              var input = embed(12, month-1).concat(embed(7, wday-1), embed(24, hour), [station_id, latitude, longitude, temp], embed(3, weather))
              var x;
              // hidden1
              x = matmul(input, weights1);
              x = vecadd(x, biases1);
              x = vec_activate(x, relu);
              // hidden2
              x = matmul(x, weights2);
              x = vecadd(x, biases2);
              x = vec_activate(x, relu);
              // hidden3
              x = matmul(x, weights3);
              x = vecadd(x, biases3);
              x = vec_activate(x, relu);
              // hidden4
              x = matmul(x, weights4);
              x = vecadd(x, biases4);
              x = vec_activate(x, relu);
              // output
              x = matmul(x, weights5);
              x = vecadd(x, biases5);
              x = vec_activate(x, relu);
              return x[0];
              """ OPTIONS ( library="gs://queryit_smart/citibike/udf/weights1.js",
    library="gs://queryit_smart/citibike/udf/biases1.js",
    library="gs://queryit_smart/citibike/udf/weights2.js",
    library="gs://queryit_smart/citibike/udf/biases2.js",
    library="gs://queryit_smart/citibike/udf/weights3.js",
    library="gs://queryit_smart/citibike/udf/biases3.js",
    library="gs://queryit_smart/citibike/udf/weights4.js",
    library="gs://queryit_smart/citibike/udf/biases4.js",
    library="gs://queryit_smart/citibike/udf/weights5.js",
    library="gs://queryit_smart/citibike/udf/biases5.js",
    library="gs://queryit_smart/citibike/udf/tensor.js" );
SELECT
  station_id,
  latitude,
  longitude,
  hour,
  usage(<%= month %>,
    <%= wday %>,
    hour,
    station_id,
    latitude,
    longitude,
    <%= temp %>,
    <%= weather %>) AS usage
FROM
  \`queryit-smart.citibike.stations_hours\``)
  }
}

export const THUMBNAIL_PATH = _.template('https://storage.googleapis.com/queryit_smart/wikimedia/images/${id}.jpg')

export const PRESENT_NUM = 3
export const CONTENT_CLASSES = [
  "is-left hover-left",
  "is-center hover-center",
  "is-right hover-right",
]

export const THUMBNAIL_SIZE = 60,
  IMG_SIZE = 240,
  DOCUMENT_IMAGE = "./images/alfabet.png",
  BIKE_IMAGE = "./images/bike.png",
  CHANNEL_IMAGES = [
    { id: "image", name: "Wikimedia Commons Images", src: './images/image.jpg', className: CONTENT_CLASSES[0] },
    { id: "text", name: "Stack Overflow Questions", src: './images/text.jpg', className: CONTENT_CLASSES[1] },
    { id: "map", name: "NYC City Bike Usage Forecast", src: './images/map.jpg', className: CONTENT_CLASSES[2] }
  ],
  PRESENT_IMAGES = [
    { id: "10000086", src: "./images/10000086.jpg", name: "JELLYFISH" },
    { id: "00000359", src: "./images/00000359.jpg", name: "BEE" },
    { id: "00000595", src: "./images/00000595.jpg", name: "F1" },
    { id: "00000615", src: "./images/00000615.jpg", name: "FIREWORKS" },
    { id: "00000895", src: "./images/00000895.jpg", name: "BIRD" },
    { id: "00001410", src: "./images/00001410.jpg", name: "CHARACTOR" },
    { id: "00001435", src: "./images/00001435.jpg", name: "ILLUSTRATION" },
    { id: "00001628", src: "./images/00001628.jpg", name: "SUNSET" },
    { id: "00002269", src: "./images/00002269.jpg", name: "SIGN" },
    { id: "00004509", src: "./images/00004509.jpg", name: "TYPHOON" },
    { id: "00005020", src: "./images/00005020.jpg", name: "FISH" },
    { id: "00005318", src: "./images/00005318.jpg", name: "ISLAND" },
    { id: "00005332", src: "./images/00005332.jpg", name: "SUN FLOWER" },
    { id: "00005558", src: "./images/00005558.jpg", name: "LEGO BLOCK" },
    { id: "00005572", src: "./images/00005572.jpg", name: "CAR" },
    { id: "00005779", src: "./images/00005779.jpg", name: "ELEPHANT" },
    { id: "00005867", src: "./images/00005867.jpg", name: "OWL" },
    { id: "00005986", src: "./images/00005986.jpg", name: "SWAN" },
    { id: "00006141", src: "./images/00006141.jpg", name: "PICTURE" },
    { id: "00006205", src: "./images/00006205.jpg", name: "GRAPH" },
    { id: "00006322", src: "./images/00006322.jpg", name: "BUTTERFLY" },
    { id: "00006562", src: "./images/00006562.jpg", name: "BALLOON" },
    { id: "00006604", src: "./images/00006604.jpg", name: "HORSE" },
    { id: "00006646", src: "./images/00006646.jpg", name: "MOON" },
    { id: "00006906", src: "./images/00006906.jpg", name: "DESERT" },
    { id: "00006935", src: "./images/00006935.jpg", name: "CAT" },
    { id: "00008742", src: "./images/00008742.jpg", name: "DRAGONFLY" },
    { id: "00008782", src: "./images/00008782.jpg", name: "LUXURY LINER" },
    { id: "00009400", src: "./images/00009400.jpg", name: "CLUCULATOR" },
    { id: "10000086", src: "./images/10000086.jpg", name: "JELLYFISH" },
  ],
  MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  WEEKDAYS = ["Sunday", "Monday","Thesday","Wednesday", "Thursday", "Friday", "Saturday"],
  WEATHERS = ["Sunny", "Rain", "Thunder"],
  TEMPERATURES = _.range(-10, 76)

