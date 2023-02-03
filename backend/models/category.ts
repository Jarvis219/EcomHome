import { Schema, model, models } from 'mongoose';
import { validateAlphanumeric } from '@/backend/validator';

const Category = new Schema({
	name: {
		type: String,
		validate: {
			validator: validateAlphanumeric,
		},
		required: true,
	},
});

export default models.Category || model('Category', Category);
