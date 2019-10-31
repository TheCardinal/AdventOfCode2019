$filename=$args[0]
tsc $filename --outDir output
node "output/$($filename).js"