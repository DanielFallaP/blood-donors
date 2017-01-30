var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DonorSchema = new Schema({
	firstName: String,
	lastName: String,
	contactNumber: String,
	email: String,
	bloodGroup: String,
	latitude: Number,
	longitude: Number,
	ipAddress: String
});

module.exports = mongoose.model('Donor', DonorSchema);
