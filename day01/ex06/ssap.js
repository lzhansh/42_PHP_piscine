if (process.argv.length > 2) {
  var myArgs = process.argv.slice(2);
  var arr = [];
  myArgs.forEach(function (val, ind) {
      arr = arr.concat(val.trim().split(/\ +/));
  })
  arr.sort()
  arr.forEach(word => console.log(word))
}
