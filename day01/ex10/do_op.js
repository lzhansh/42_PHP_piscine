if (process.argv.length == 5) {
  var myArgs = process.argv.slice(2);
  var op = myArgs[1].replace(/\t/g, '').trim()
  console.log(myArgs[1])
  var a = Number(myArgs[0].replace(/\t/g, '').trim())
  var b = Number(myArgs[2].replace(/\t/g, '').trim())
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
else
  console.log("Incorrect Parameters")
