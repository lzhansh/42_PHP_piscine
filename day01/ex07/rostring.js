if (process.argv.length > 2) {
  var str = process.argv[2];
  var arr = str.trim().split(/\ +/)
  arr.push(arr.shift())
  console.log(arr.join(" "));
}
