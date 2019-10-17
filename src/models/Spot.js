const mongosse = require('mongoose');

const SpotSchema = new mongosse.Schema({
	thumbnail: String,
	company: String,
	price: Number,
	techs: [String],
	user: {
		type: mongosse.Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongosse.model('Spot', SpotSchema);
