function monthN(str) {
  if (str == "janvier")
    return (0)
  else if (str == "février")
    return (1)
  else if (str == "mars")
    return (2)
  else if (str == "avril")
    return (3)
  else if (str == "mai")
    return (4)
  else if (str == "juin")
    return (5)
  else if (str == "juillet")
    return (6)
  else if (str == "aout")
    return (7)
  else if (str == "septembre")
    return (8)
  else if (str == "octobre")
    return (9)
  else if (str == "novembre")
    return (10)
  else if (str == "décembre")
    return (11)
  else
    return (12)
}

function dayCheck(d) {
  if (d == 'lundi' || d == 'mardi' || d == 'mercredi' || d == 'jeudi' || d == 'vendredi' || d == 'samedi' || d == 'dimanche')
    return (1)
  else
    return (0)
}

if (process.argv.length == 3) {
  var myArgs = process.argv.slice(2)
  var arr = myArgs[0].split(' ')
  if (arr.length == 5) {
    var t = arr[4].split(':')
    if (dayCheck(arr[0].toLowerCase()) &&
     (Number(arr[1]) > 0 && Number(arr[1]) < 32) &&
     monthN(arr[2].toLowerCase()) < 12 &&
     arr[3].length == 4 && t[0].length == 2 &&
     t[1].length == 2 && t[2].length == 2) {
      var timeFr = new Date(Number(arr[3]), monthN(arr[2].toLowerCase()), Number(arr[1]), Number(t[0]), Number(t[1]), Number(t[2])).getTime()
      console.log(timeFr/1000 - 9 * 60 * 60)
    }
    else
      console.log("Wrong Format")
  }
  else
    console.log("Wrong Format")
}
