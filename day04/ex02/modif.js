var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var fs = require('fs');
var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function hash(passwd) {
	var hash = crypto.createHash('whirlpool');
	data = hash.update(passwd, 'utf-8');
	gen_hash = data.digest('hex');
	return (gen_hash);
}

app.get('/ex02/modif.js', (req, res) => {
	res.send('./index.html')
});

app.post('/ex02/modif.js', (req, res) => {
	let ret = "OK\n";
	let user_data_arr = [];
	let login = req.body.login;
	let oldpw = req.body.oldpw;
	let newpw = req.body.newpw;
	let submit = req.body.submit;
	if (submit != "OK" || !login || !oldpw || !newpw) {
		res.send('ERROR\n');
		return;
	}
	fs.exists('../ex01/private/passwd', function (exist) {
		if (exist) {
			fs.readFile('../ex01/private/passwd', (err, data) => {
				let usernum = -1
				let account_exist = false;
				user_data_arr = JSON.parse(data)
				if (user_data_arr.length) {
					for (let i = 0; i < user_data_arr.length; i+=1) {
						if (user_data_arr[i].login == login) {
							if (user_data_arr[i].passwd == hash(oldpw)) {
								account_exist = true
								usernum = i
				}}}}
				console.log(user_data_arr[usernum], usernum)
				if (!account_exist) {
					res.send('ERROR\n')
					return
				}
				let user = {
					login: login,
					passwd: hash(newpw)
				}
				user_data_arr[usernum] = user
				fs.writeFile('../ex01/private/passwd', JSON.stringify(user_data_arr), () => {
					res.send(ret)
				})
			})
		}
		else {
			res.send('ERROR\n')
			return
		}
	})
})

app.listen(8100)
