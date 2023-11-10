import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const filepath1 = path.resolve('__fixtures__/file1.json');
const obj1 = JSON.parse(fs.readFileSync(filepath1));
console.log(obj1)
// const JSONobj1 = JSON.stringify(obj1)
// console.log(JSONobj1)
const filepath2 = path.resolve('/Users/vik/Documents/GitHub/frontend-project-46/__fixtures__/file2.json');
const obj2 = JSON.parse(fs.readFileSync(filepath2));
console.log(obj2)
// const JSONobj2 = JSON.stringify(obj2)
// console.log(JSONobj2)

function getPath(str) {
    return str.startsWith("/") ? path.resolve(str) : process.cwd(str);
}

function getData(obj) {
    return JSON.parse(fs.readFileSync(obj))
}

function genDifferentObj(obj1, obj2) {
    const allKeys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));
    console.log(allKeys);
    const result = allKeys.map((key) => {
        const oldValue = obj1[key];
        const newValue = obj2[key];
        if (!_.has(obj2, key)) {
            return {
                action: 'deleted',
                key,
                oldValue
            };
        };
        if (!_.has(obj1, key)) {
            return {
                action: 'added',
                key,
                newValue
            };
        };
        if (oldValue !== newValue) {
            return {
                action: 'changed',
                key,
                oldValue,
                newValue
            };
        };
        return {
            action: 'unchanged',
            oldValue,
            key
        };
    });
    return result;
};

console.log(genDifferentObj(obj1, obj2));

export { getPath, getData };