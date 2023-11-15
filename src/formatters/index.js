import genDiff from "../index.js";
import getStylish from "./stylish.js";

const getFormatName = (formatName) => {
	if (!formatName) {
		return 'stylish';
	}
};

export default function makeFormat (tree, formatName) {
	const format = getFormatName(formatName);
	if (format === 'stylish') {
		return getStylish(tree);
	}
}
