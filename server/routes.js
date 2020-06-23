require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_APIKEY);

let requestDemo = function(req, res) {

	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const company = req.body.company;
	const message = req.body.message;

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
			res.status(200);
			res.json("SUCCESS");
		},
		err => {
			res.status(500);
			res.json("FAILURE");
		});
};

module.exports = {
	requestDemo: requestDemo
};