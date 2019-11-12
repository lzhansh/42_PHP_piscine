if (process.argv.length > 2) {
	var str = process.argv[2]
	console.log(str.trim().split(/[\t ]+/).join(" "));
}
