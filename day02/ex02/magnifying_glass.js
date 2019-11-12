if (process.argv[2]) {
  var fs = require('fs')
  var data = fs.readFileSync(process.argv[2], 'utf-8')
  console.log(data)
  result = data.replace(/<a.*?title="(.*?)">/g, function getSubstring(match){
    return(match.replace(/[^title="]*".*/, function getUpper(submatch){
      return(submatch = submatch.toUpperCase())
    }))
  })

  result = result.replace(/<a.*</g, function getSubstring(match){
    return(match.replace(/(>)(.*?)(<)/, function getUpper(submatch){
      return(submatch = submatch.toUpperCase())
    }))
  })
  process.stdout.write(result)
}
