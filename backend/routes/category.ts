import { NextApiRequest, NextApiResponse } from 'next';
import {
	getCategoryById,
	getCategories,
	setCategory,
	updateCategory,
	deleteCategory,
} from '@/backend/controllers/category';
import verifyToken from '@/backend/middleware/token';

const routers = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	switch (method) {
		case 'GET':
			if (req.query.id) {
				verifyToken(req, res, getCategoryById);
				break;
			}
			verifyToken(req, res, getCategories);
			break;
		case 'POST':
			verifyToken(req, res, setCategory);
			break;
		case 'PUT':
			verifyToken(req, res, updateCategory);
			break;
		case 'DELETE':
			verifyToken(req, res, deleteCategory);
			break;
		default: {
			res.status(400).json({ success: false });
		}
	}
};

export default routers;
