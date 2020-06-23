let request = require('supertest');
require = require('really-need');

describe('request demo', () => {
	let server;
	beforeAll(() => {
		server = require('../index.js', { bustCache: true });
	});
	afterAll((done) => {
		server.close(done);
	});

	test("Request Demo with no name", (done) => {
		request(server)
			.post('/request-demo')
			.send(
				{
					email: "kofmangregory@gmail.com",
					phone: "1231231231",
					company: "Leaselot",
					message: "Hello"
				})
			.set("Content-Type", "application/json")
			.expect(422, "INVALID_NAME")
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	test("Request Demo with no email", (done) => {
		request(server)
			.post('/request-demo')
			.send(
				{
					name: "Greg Kofman",
					phone: "1231231231",
					company: "Leaselot",
					message: "Hello"
				})
			.set("Content-Type", "application/json")
			.expect(422, "INVALID_EMAIL")
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	test("Request Demo with no phone", (done) => {
		request(server)
			.post('/request-demo')
			.send(
				{
					name: "Greg Kofman",
					email: "kofmangregory@gmail.com",
					company: "Leaselot",
					message: "Hello"
				})
			.set("Content-Type", "application/json")
			.expect(422, "INVALID_PHONE")
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	test("Request Demo with no company", (done) => {
		request(server)
			.post('/request-demo')
			.send(
				{
					name: "Greg Kofman",
					email: "kofmangregory@gmail.com",
					phone: "1231231231",
					message: "Hello"
				})
			.set("Content-Type", "application/json")
			.expect(422, "INVALID_COMPANY")
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	test("Request Demo with no message", (done) => {
		request(server)
			.post('/request-demo')
			.send(
				{
					name: "Greg Kofman",
					email: "kofmangregory@gmail.com",
					phone: "1231231231",
					company: "Leaselot",
				})
			.set("Content-Type", "application/json")
			.expect(422, "INVALID_MESSAGE")
			.end((err, res) => {
				if (err) return done(err);
				done();
			});
	});

	
});