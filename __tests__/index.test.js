import genDiff from '../src/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs, { read } from 'fs';
import makeFormat from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


test('gendiff test', () => {
	const path1 = getFixturePath('file1.json');
	const path2 = getFixturePath('file2.json');
	const result = genDiff(path1, path2);
	const expectedFile = readFixture('expected_file_stylish.txt');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format json', () => {
	const path1 = getFixturePath('file1.json');
	const path2 = getFixturePath('file2.json');
	const result = genDiff(path1, path2, 'stylish');
	const expectedFile = readFixture('expected_file_stylish.txt');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format yml', () => {
	const path1 = getFixturePath('file1.yml');
	const path2 = getFixturePath('file2.yml');
	const result = genDiff(path1, path2);
	const expectedFile = readFixture('expected_file_stylish.txt');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format plain', () => {
	const path1 = getFixturePath('file1.json');
	const path2 = getFixturePath('file2.json');
	const result = genDiff(path1, path2, 'plain');
	const expectedFile = readFixture('expected_file_plain.txt');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format JSON.stringify', () => {
	const path1 = getFixturePath('file1.json');
	const path2 = getFixturePath('file2.json');
	const result = genDiff(path1, path2, 'json');
	const expectedFile = readFixture('expected_file_json.txt');
	expect(result).toEqual(expectedFile);
});

// gendiff __fixtures__/file1.json __fixtures__/file2.json