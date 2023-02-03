import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const verifyToken = (
	req: NextApiRequest,
	res: NextApiResponse,
	callback: (req: NextApiRequest, res: NextApiResponse) => void
) => {
	const authorizationHeader = req.headers['authorization'];

	if (!authorizationHeader) {
		return res.status(401).json({
			error: 'Token not found',
		});
	}

	const token = authorizationHeader.split(' ')[1];

	if (!token || token === 'null') {
		return res.status(401).json({
			error: 'Token not match',
		});
	}

	jwt.verify(token, process.env.JWT_SECRET || '', (err: any) => {
		if (err) {
			return res.status(403).json({
				err,
				error: 'Token expired',
			});
		}
		callback(req, res);
	});
};

export default verifyToken;
