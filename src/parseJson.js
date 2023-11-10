import fs from 'fs';
import path from 'path';
import _ from 'lodash';

function getPath(str) {
    if (str.startsWith("/")) {
        return path.resolve(str);
    } else {
        const dirName = process.cwd(str);
        return path.resolve(dirName, str);
    };
};

function getData(obj) {
    return JSON.parse(fs.readFileSync(obj))
}

export { getPath, getData };

// function genDifferentObj(obj1, obj2) {
//     const allKeys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));
//     const result = allKeys.map((key) => {
//         const oldValue = obj1[key];
//         const newValue = obj2[key];
//         if (!_.has(obj2, key)) {
//             return {
//                 action: 'deleted',
//                 key,
//                 oldValue
//         }
//         };
//         if (!_.has(obj1, key)) {
//             return {
//                 action: 'added',
//                 key,
//                 newValue
//             };
//         };
//         if (oldValue !== newValue) {
//             return {
//                 action: 'changed',
//                 key,
//                 oldValue,
//                 newValue
//             };
//         };
//         return {
//             action: 'unchanged',
//             key,
//             oldValue
//         };
//     })
//     .map((item) => {
//         const result = [];
//         if (item.action === 'deleted') {
//             result.push(`- ${item.key}: ${item.oldValue}`);
//         }
//         if (item.action === 'unchanged') {
//             result.push(`  ${item.key}: ${item.oldValue}`);
//         }
//         if (item.action === 'changed') {
//             result.push(`- ${item.key}: ${item.oldValue}`);
//             result.push(`+ ${item.key}: ${item.newValue}`);
//         }
//         if (item.action === 'added') {
//             result.push(`+ ${item.key}: ${item.newValue}`);
//         }
//         return result;
//     })
//     return result.join();
// };

// console.log(genDifferentObj(obj1, obj2));

// const objects = (genDifferentObj(obj1, obj2));

// const tetsObjects = objects.map((item) => {
//     const result = [];
//     if (item.action === 'deleted') {
//         result.push(`- ${item.key}: ${item.oldValue}`);
//     }
//     if (item.action === 'unchanged') {
//         result.push(`  ${item.key}: ${item.oldValue}`);
//     }
//     if (item.action === 'changed') {
//         result.push(`- ${item.key}: ${item.oldValue}`);
//         result.push(`+ ${item.key}: ${item.newValue}`);
//     }
//     if (item.action === 'added') {
//         result.push(`+ ${item.key}: ${item.newValue}`);
//     }
//     return result;
// })

// console.log(tetsObjects)