$filename=$args[0]
tsc $filename
node "$($filename).js"