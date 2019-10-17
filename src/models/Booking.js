const mongosse = require('mongoose');

const BookingSchema = new mongosse.Schema({
	date: String,
	approved: Boolean,
	user: {
		type: mongosse.Schema.Types.ObjectId,
		ref: 'User'
	},
	spot: {
		type: mongosse.Schema.Types.ObjectId,
		ref: 'Spot'
	}
});

module.exports = mongosse.model('Booking', BookingSchema);
