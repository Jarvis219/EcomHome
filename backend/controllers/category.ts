import { NextApiRequest, NextApiResponse } from 'next';
import Category from '@/backend/models/category';

export const getCategories = async (
	_: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const categories = await Category.find();
		res.json(categories);
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};

export const getCategoryById = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const { id } = req.query;
		const category = await Category.findById(id);
		res.json(category);
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};

export const setCategory = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const category = new Category(req.body);
		await category.save();
		res.json({ message: 'Category created successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};

export const deleteCategory = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const { id } = req.query;
		await Category.findByIdAndDelete(id);
		res.json({ message: 'Category deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};

export const updateCategory = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const { id } = req.query;
		await Category.findByIdAndUpdate(id, req.body);
		res.json({ message: 'Category updated successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error occured' });
	}
};
