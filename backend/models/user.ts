import { Schema, model, models } from 'mongoose';
import { validateAlphanumeric, validateEmail } from '@/backend/validator';

const User = new Schema({
	name: {
		type: String,
		validate: {
			validator: validateAlphanumeric,
		},
		required: true,
	},
	email: {
		type: String,
		unique: true,
		validate: {
			validator: validateEmail,
		},
		required: true,
	},
	phone: {
		type: String,
		validate: {
			validator: validateAlphanumeric,
		},
	},
	hashed_password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
		default: 'member',
	},
});

User.virtual('password').set(function (password) {
	this.hashed_password = Buffer.from(password).toString('base64');
});

User.methods = {
	authenticate: function (plainText: string) {
		return Buffer.from(plainText).toString('base64') === this.hashed_password;
	},
};

export default models.User || model('User', User);
