var myArgs = process.argv.slice(2);
var arr = [];
myArgs.forEach(function (val, ind) {
    arr = arr.concat(val.trim().split(/\ +/));
})

strArr = []
numArr = []
symArr = []

function isAlphaNum(inp) {
  if ((inp[0] >= 'a' && inp[0] <= 'z') || (inp[0] >= 'A' && inp[0] <= 'Z'))
    return (true)
  else
    return (false)
}

for (var i = 0; i < arr.length; i += 1) {
  if (isAlphaNum(arr[i]))
    strArr.push(arr[i])
  else if (isNaN(arr[i]))
    symArr.push(arr[i])
  else
    numArr.push(arr[i])
}
strArr.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
})

numArr.sort()
symArr.sort()
strArr.forEach(word => console.log(word))
numArr.forEach(word => console.log(word))
symArr.forEach(word => console.log(word))
