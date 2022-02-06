export const chars = {
	lowercase: "abcdefghijklmnopqrstuvwxyz",
	uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	numbers: "0123456789",
	symbols: "~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/",
};

export const allCharTypes = Object.keys(chars);

export const pickRandomChar = (characters) =>
	characters.charAt(Math.floor(Math.random() * characters.length));
