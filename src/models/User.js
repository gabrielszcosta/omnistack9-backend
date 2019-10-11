const mongosse = require('mongoose');

const UserSchema = new mongosse.Schema({
	email: String
});

module.exports = mongosse.model('User', UserSchema);
