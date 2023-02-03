import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../models/product';

export const getProducts = async (_: NextApiRequest, res: NextApiResponse) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};

export const getProductById = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const { id } = req.query;
		const product = await Product.findById(id);
		res.json(product);
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};

export const setProduct = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const product = new Product(req.body);
		await product.save();
		res.json({ message: 'Product created successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};

export const deleteProduct = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const { id } = req.query;
		await Product.findByIdAndDelete(id);
		res.json({ message: 'Product deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};

export const updateProduct = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const { id } = req.query;
		await Product.findByIdAndUpdate(id, req.body);
		res.json({ message: 'Product updated successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};
