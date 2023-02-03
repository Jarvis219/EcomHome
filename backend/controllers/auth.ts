import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import User from '@/backend/models/user';

export const signUp = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { email, password, phone, name } = req.body;
		const user = new User({ email, password, phone, name });
		const data = await user.save();
		res.json(data);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

export const signIn = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, password } = req.body;
	User.findOne(
		{ email: email, password: password },
		(err: Error, user: any) => {
			if (err || !user) {
				return res.status(400).json({
					error: 'User email does not exist. Please signup',
				});
			}

			if (!user.authenticate(password)) {
				return res.status(401).json({
					error: 'Email and password do not match',
				});
			}

			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || '');
			const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

			const { _id, name, email, role } = user;
			return res.json({ token, expires, user: { _id, name, email, role } });
		}
	);
};
