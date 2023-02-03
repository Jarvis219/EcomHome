import { NextApiRequest, NextApiResponse } from 'next';
import { signIn, signUp } from '@/backend/controllers/auth';

const routers = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	switch (method) {
		case 'POST':
			if (req.query.signin) {
				await signIn(req, res);
				break;
			}
			await signUp(req, res);
			break;
		default: {
			res.status(400).json({ success: false });
		}
	}
};

export default routers;
