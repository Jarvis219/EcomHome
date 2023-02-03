import { Schema, model, models } from 'mongoose';
import { validateAlphanumeric } from '@/backend/validator';

const Product = new Schema({
	name: {
		type: String,
		validate: {
			validator: validateAlphanumeric,
		},
		required: true,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	amount: {
		type: Number,
		required: true,
		default: 0,
	},
	price: {
		type: Number,
		required: true,
		default: 0,
	},
	photo: {
		type: String,
		validate: {
			validator: validateAlphanumeric,
		},
		required: true,
	},
	QRcode: {
		type: String,
	},
});

export default models.Product || model('Product', Product);
