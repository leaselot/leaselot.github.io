require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_APIKEY);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post(
	'/email', 
	(req, res) => {

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
			}
			);
});

app.listen(process.env.PORT, () => {
	console.log(`Server listening on PORT ${process.env.PORT}`);
})