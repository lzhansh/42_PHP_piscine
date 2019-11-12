function ft_split(str) {
    var arr = str.trim().split(/\ +/);
    return (arr.sort());
}

var st = "  Hey there you    "
console.log(ft_split(st))