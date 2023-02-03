export const validateAlphanumeric = (value: string) => {
	if (value.trim() === '') return false;
	return /^[a-zA-Z0-9- ]*$/.test(value);
};

export const validateEmail = (value: string) => {
	if (value.trim() === '') return false;
	return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
};

export const validatePhone = (value: string) => {
	if (value.trim() === '') return false;
	return /^((\+84|84|0[3|5|7|8|9])+([0-9]{8})\b)/.test(value);
};
