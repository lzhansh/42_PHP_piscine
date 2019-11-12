var request = require('request')
var url = require('url')
var cheerio = require('cheerio')
path = require('path')
var fs = require('fs')

function createFolder(folder){
  fs.mkdir(folder, function(){})
}

function getImages(uri) {
    var spl = uri.split('//')
    var p = './'.concat(spl[1])
    createFolder(p)
    request(uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body)
            imgs = $('img').toArray()
            imgs.forEach(function (img) {
                img_url = img.attribs.src
                if (/^https?:\/\//.test(img_url)) {
                    img_name = path.basename(img_url)
                    request(img_url).pipe(fs.createWriteStream(p+'/'+img_name))
                }
            })
        }
    })
}

if (process.argv[2]) {
  getImages(process.argv[2])
}
