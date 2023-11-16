import getStylish from "./stylish.js";
import getPlain from "./plain.js";

const getFormatName = (formatName) => {
	if (formatName === undefined) {
		return 'stylish';
	}
	return formatName;
};

export default function makeFormat (tree, formatName) {
	const format = getFormatName(formatName);
	if (format === 'stylish') {
		return getStylish(tree);
	}
	if (format === 'plain') {
		return getPlain(tree);
	}
	if (format === 'json') {
		return JSON.stringify(tree);
	}
}
