import { NextApiRequest, NextApiResponse } from 'next';
import {
	getProductById,
	getProducts,
	setProduct,
	updateProduct,
	deleteProduct,
} from '@/backend/controllers/product';
import verifyToken from '@/backend/middleware/token';

const routers = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	switch (method) {
		case 'GET':
			if (req.query.id) {
				verifyToken(req, res, getProductById);
				break;
			}
			verifyToken(req, res, getProducts);
			break;
		case 'POST':
			verifyToken(req, res, setProduct);
			break;
		case 'PUT':
			verifyToken(req, res, updateProduct);
			break;
		case 'DELETE':
			verifyToken(req, res, deleteProduct);
			break;
		default: {
			res.status(400).json({ success: false });
		}
	}
};

export default routers;
