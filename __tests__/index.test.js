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

const expectedFile = readFixture('expected_file_json.txt');
console.log(expectedFile);


test('gendiff test', () => {
	const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
	const expectedFile = readFixture('expected_file_json.txt');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format json', () => {
	const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');
	const expectedFile = readFixture('expected_file_json.stylish');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format yml', () => {
	const result = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
	const expectedFile = readFixture('expected_file_stylish.txt');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format plain', () => {
	const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain');
	const expectedFile = readFixture('expected_file_plain.txt');
	expect(result).toEqual(expectedFile);
});