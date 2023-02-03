import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/backend/lib/db';
import routers from '@/backend/routes/category';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await dbConnect();
	routers(req, res);
}
