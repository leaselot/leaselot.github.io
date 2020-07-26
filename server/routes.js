require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const validation = require('./utils/input-validation.js');

sgMail.setApiKey(process.env.SENDGRID_APIKEY);

let requestDemo = function(req, res) {
	console.log(req.body);
	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const company = req.body.company;
	const message = req.body.message;

	if (!validation.validName(name)) {
		//res.status(422);
		res.json("INVALID_NAME");
		return;
	}
	if (!validation.validEmail(email)) {
		//res.status(422);
		res.json("INVALID_EMAIL");
		return;
	}
	if (!validation.validPhoneNumber(phone)) {
		//res.status(422);
		res.json("INVALID_PHONE");
		return;
	}
	if (!validation.validMessage(message)) {
		//res.status(422);
		res.json("INVALID_MESSAGE");
		return;
	}
	if (!validation.validMisc(company)) {
		//res.status(422);
		res.json("INVALID_COMPANY");
		return;
	}

	const msg = {
		to: process.env.EMAIL,
		from: process.env.EMAIL,
		subject: 'Leaselot Demo Request',
		text: 'A new demo of Leaselot has been requested.\n\n'
			+ 'Name: ' + name + '\n'
			+ 'Company: ' + company + '\n'
			+ 'Email: ' + email + '\n'
			+ 'Phone: ' + phone  + '\n\n'
			+ 'Message: ' + message
	};
	sgMail.send(msg).then(
		() => {
			//res.status(200);
			res.json("SUCCESS");
		},
		err => {
			//res.status(500);
			res.json("FAILURE");
		});
};

module.exports = {
	requestDemo: requestDemo
};