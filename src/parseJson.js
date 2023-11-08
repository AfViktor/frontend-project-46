import fs from 'fs';
import path from 'path';

const filepath1 = path.resolve('files/file1.json');
console.log(filepath1)
const obj1 = JSON.parse(fs.readFileSync(filepath1));
console.log(obj1)

const filepath2 = path.resolve('files/file2.json');
console.log(filepath1)
const obj2 = JSON.parse(fs.readFileSync(filepath2));
console.log(obj2)