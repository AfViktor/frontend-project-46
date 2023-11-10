import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const filepath1 = path.resolve('__fixtures__/file1.json');
const obj1 = JSON.parse(fs.readFileSync(filepath1));
console.log(obj1)
const JSONobj1 = JSON.stringify(obj1)
console.log(JSONobj1)
const filepath2 = path.resolve('/Users/vik/Documents/GitHub/frontend-project-46/__fixtures__/file2.json');
const obj2 = JSON.parse(fs.readFileSync(filepath2));
const JSONobj2 = JSON.stringify(obj2)
console.log(JSONobj2)

function getPath(str) {
    return str.startsWith("/") ? path.resolve(str) : process.cwd(str);
}

function getData(obj) {
    return JSON.parse(fs.readFileSync(obj))
}

function genDifferentObj(obj1, obj2) {
    const dataObj1 = JSON.stringify(obj1).split(' ');
    const dataObj2 = JSON.stringify(obj2).split(' ');
    const str = _.union([...dataObj1, ...dataObj2].flat());
    const strClone = _.cloneDeep(str).sort();
    return strClone.join(' ');
}

console.log(genDifferentObj(obj1, obj2));

export { getPath, getData };