
require "json"
require "fileutils"

file = ARGV[0] || "weights.json"
udf_dir = ARGV[1] || "udf"

data = JSON.parse(File.read(file))

FileUtils.mkdir(udf_dir)
data.keys.each do |k|
  open("#{udf_dir}/#{k}.js", "w") do |f|
    f.puts "var #{k} = #{data[k].to_json};"
  end
end
