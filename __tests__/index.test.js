import genDiff from '../src/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename));

const path1 = getFixturePath('file1.json');
const data1 = readFixture('file1.json');
const path2 = getFixturePath('file2.json');
const data2 = readFixture('file2.json');
const result = genDiff(data1, data2);

test('gendiff test', () => {
  expect(genDiff(path1, path2)).toEqual(result);
});
