if (process.argv.length == 3) {
  var str = process.argv[2];
  console.log(str.trim().split(/\ +/).join(" "));
}
