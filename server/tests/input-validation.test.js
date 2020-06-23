const validation = require("../utils/input-validation.js");

describe("Name validation", () => {
	test("null name is invalid", () => {
		expect(validation.validName(null)).toBeFalsy();
	});

	test("undefined name is invalid", () => {
		expect(validation.validName(undefined)).toBeFalsy();
	});

	test("empty name is invalid", () => {
		expect(validation.validName("")).toBeFalsy();
	});

	test("single word name is invalid", () => {
		expect(validation.validName("Leaselot")).toBeFalsy();
	});

	test("two word name is valid", () => {
		expect(validation.validName("Greg Kofman")).toBeTruthy();
	});

	test("last name with dash is valid", () => {
		expect(validation.validName("Alan Shtr-aks")).toBeTruthy();
	});

	test("first name with dash is valid", () => {
		expect(validation.validName("Al-an Shtraks")).toBeTruthy();
	});

	test("first and last name with dash is valid", () => {
		expect(validation.validName("Al-an Shtr-aks")).toBeTruthy();
	});

	test("very long name is invalid", () => {
		expect(
			validation.validName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"))
				.toBeFalsy();
	});

	test("name with number is invalid", () => {
		expect(validation.validName("Gr3g Kofman")).toBeFalsy();
	});
});

describe("Phone number validation", () => {
	test("null phone number is invalid", () => {
		expect(validation.validPhoneNumber(null)).toBeFalsy();
	});

	test("undefined phone number is invalid", () => {
		expect(validation.validPhoneNumber(undefined)).toBeFalsy();
	});

	test("empty string phone number is invalid", () => {
		expect(validation.validPhoneNumber("")).toBeFalsy();
	});

	test("letter in phone number is invalid", () => {
		expect(validation.validPhoneNumber("215abc1234")).toBeFalsy();
	});

	test("ten digit phone number is valid", () => {
		expect(validation.validPhoneNumber("1231231231")).toBeTruthy();
	});

	test("long phone number is invalid", () => {
		expect(validation.validPhoneNumber("12345678901")).toBeFalsy();
	})
});

describe("Email validation", () => {
	test("null email is invalid", () => {
		expect(validation.validEmail(null)).toBeFalsy();
	});

	test("undefined email is invalid", () => {
		expect(validation.validEmail(undefined)).toBeFalsy();
	});

	test("empty string email is invalid", () => {
		expect(validation.validEmail("")).toBeFalsy();
	});

	test("missing @ email is invalid", () => {
		expect(validation.validEmail("kofmangregoryatgmail.com")).toBeFalsy();
	});

	test("missing . email is invalid", () => {
		expect(validation.validEmail("kofmangregory@gmaildotcom")).toBeFalsy();
	});

	test("email with . and @ is valid", () => {
		expect(validation.validEmail("kofmangregory@gmail.com")).toBeTruthy();
	});

	test("long email is invalid", () => {
		expect(validation.validEmail("kofmangregory@gmail.comcomcomcomcomcomcomcomcomcomcomcomcomcomcomcomcomcomcomcomcomcom"));
	})
});

describe("Message validation", () => {
	test("null message is invalid", () => {
		expect(validation.validMessage(null)).toBeFalsy();
	});

	test("undefined message is invalid", () => {
		expect(validation.validMessage(undefined)).toBeFalsy();
	});

	test("empty string message is invalid", () => {
		expect(validation.validMessage("")).toBeFalsy();
	});

	test("very long message is invalid", () => {
		expect(validation.validMessage(
			"abcdefghijklmnopqrstuvwxyz" + 
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz" +
			"abcdefghijklmnopqrstuvwxyz")).toBeFalsy();
	});

	test("shorter message is valid", () => {
		expect(validation.validMessage("Hello Leaselot, I would like a demo."))
			.toBeTruthy();
	});
});

describe("Misc validation", () => {
	test("null misc is invalid", () => {
		expect(validation.validMisc(null)).toBeFalsy();
	});

	test("undefined misc is invalid", () => {
		expect(validation.validMisc(undefined)).toBeFalsy();
	});

	test("long misc is invalid", () => {
		expect(
			validation.validMisc("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"))
				.toBeFalsy();
	});

	test("shorter misc is valid", () => {
		expect(validation.validMisc("Shorter misc.")).toBeTruthy();
	});
});