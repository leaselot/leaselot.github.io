let validName = function(name) {
	if (name == null) return false;
	if (name.length > 80) return false;
	return /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(name);
}

let validPhoneNumber = function(phoneNumber) {
	if (phoenNumber == null) return false;
	if (phoneNumber.length > 20) return false;
	return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phoneNumber);
}

let validEmail = function(email) {
	if (email == null) return false;
	if (email.length > 80) return false;
	return /\S+@\S+\.\S+/.test(email);
}

let validMessage = function(message) {
	if (message == null) return false;
	return message.length <= 500;
}

let validMisc = function(misc) {
	if (misc == null) return false;
	return misc.length <= 80;
}

module.exports = {
	validName: validName,
	validPhoneNumber: validPhoneNumber,
	validEmail: validEmail,
	validMessage: validMessage,
	validMisc: validMisc 
};