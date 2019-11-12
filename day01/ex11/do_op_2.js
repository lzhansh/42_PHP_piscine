if (process.argv.length == 3) {
  var myArgs = process.argv.slice(2);
  var str = myArgs[0].replace(/[\t ]+/g, '').trim()
  if (isNaN(parseInt(str))) {
    console.log("Syntax Error")
    return
  }
  else {
    var arr = str.split(/([\s-*%//+]+)/)
    var op = arr[1]
    var a = arr[0]
    var b = arr[2]
    if (op == '+')
      console.log(a + b)
    else if (op == '-')
      console.log(a - b)
    else if (op == '*')
      console.log(a * b)
    else if (op == '%')
      console.log(a % b)
    else if (op == '/')
      console.log(a / b)
  }
}
else
  console.log("Incorrect Parameters")
