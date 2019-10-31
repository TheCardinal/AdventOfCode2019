$filename=$args[0]
tsc $filename --outDir output
$lastSlash=$filename.LastIndexOf('\')
$output=$filename.Substring($lastSlash+1,($filename.Length-$lastSlash-4))
node "output\$($output).js"