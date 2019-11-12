let std = process.stdin;
std.setEncoding('utf-8');
process.stdout.write("Enter a number: ")

std.on('data', function(val) {
  if (isNaN(val) || !(val.toString().trim())) {
      console.log("'%s' is not a number", val.trim());
  }
  else if (val % 2 == 0) {
      console.log("The number %s is even", val.trim());
  }
  else
      console.log("The number %s is odd", val.trim());
  process.stdout.write("Enter a number: ")
})
//while (1) {


//}
