import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const filepath1 = path.resolve('files/file1.json');
const obj1 = JSON.parse(fs.readFileSync(filepath1));
const filepath2 = path.resolve('files/file2.json');
const obj2 = JSON.parse(fs.readFileSync(filepath2));

function getPath(path) {
    return path.resolve(path);
}

function getData(obj) {
    return JSON.parse(fs.readFileSync(obj))
}

function genDifferentObj(obj1, obj2) {
    const dataObj1 = Object.entries(obj1);
    const dataObj2 = Object.entries(obj2);
    const str = _.union([...dataObj1, ...dataObj2].flat());
    const strClone = _.cloneDeep(str).sort();
    return strClone.join(' ');
}

console.log(genDifferentObj(obj1, obj2));

export { getPath, getData };