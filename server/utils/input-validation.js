let validName = function(name) {
	console.log('Name is: ' + name);
	if (name == null) return false;
	if (name.length > 80) return false;
	return /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(name);
}

let validPhoneNumber = function(phoneNumber) {
	if (phoneNumber == null) return false;
	return /^\d{10}$/.test(phoneNumber);
}

let validEmail = function(email) {
	if (email == null) return false;
	if (email.length > 80) return false;
	return /\S+@\S+\.\S+/.test(email);
}

let validMessage = function(message) {
	if (message == null) return false;
	if (message.length == 0) return false;
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