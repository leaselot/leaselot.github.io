jest.mock('@sendgrid/mail');

const sgMail = require('@sendgrid/mail');
let request = require('supertest');
require = require('really-need');

describe('contact us', () => {
	let server;
	beforeAll(() => {
		server = require('../index.js', { bustCache: true });
	});
	afterAll((done) => {
		server.close(done);
	});

	test("Request Demo with no name", (done) => {
		sgMail.send.mockReturnValue(Promise.resolve());
		request(server)
			.post('/contact-us')
			.send(
				{
					email: "kofmangregory@gmail.com",
					phone: "1231231231",
					company: "Leaselot",
					message: "Hello"
				})
			.set("Content-Type", "application/json")
			.expect(200, '"INVALID_NAME"')
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	test("Request Demo with no email", (done) => {
		sgMail.send.mockReturnValue(Promise.resolve());
		request(server)
			.post('/contact-us')
			.send(
				{
					name: "Greg Kofman",
					phone: "1231231231",
					company: "Leaselot",
					message: "Hello"
				})
			.set("Content-Type", "application/json")
			.expect(200, '"INVALID_EMAIL"')
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	test("Request Demo with no phone", (done) => {
		sgMail.send.mockReturnValue(Promise.resolve());
		request(server)
			.post('/contact-us')
			.send(
				{
					name: "Greg Kofman",
					email: "kofmangregory@gmail.com",
					company: "Leaselot",
					message: "Hello"
				})
			.set("Content-Type", "application/json")
			.expect(200, '"INVALID_PHONE"')
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	test("Request Demo with no company", (done) => {
		sgMail.send.mockReturnValue(Promise.resolve());
		request(server)
			.post('/contact-us')
			.send(
				{
					name: "Greg Kofman",
					email: "kofmangregory@gmail.com",
					phone: "1231231231",
					message: "Hello"
				})
			.set("Content-Type", "application/json")
			.expect(200, '"INVALID_COMPANY"')
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	test("Request Demo with no message", (done) => {
		sgMail.send.mockReturnValue(Promise.resolve());
		request(server)
			.post('/contact-us')
			.send(
				{
					name: "Greg Kofman",
					email: "kofmangregory@gmail.com",
					phone: "1231231231",
					company: "Leaselot",
				})
			.set("Content-Type", "application/json")
			.expect(200, '"INVALID_MESSAGE"')
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	test("proper email test", (done) => {
		sgMail.send.mockReturnValue(Promise.resolve());
		request(server)
			.post('/contact-us')
			.send(
				{
					name: "Greg Kofman",
					email: "kofmangregory@gmail.com",
					phone: "1231231231",
					company: "Leaselot",
					message: "Hello"
				})
			.set("Content-Type", "application/json")
			.expect(200, '"SUCCESS"')
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});
});