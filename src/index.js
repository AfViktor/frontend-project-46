import fs from 'fs';
import path from 'path';
import _ from 'lodash';

function getDifferent(obj1, obj2) {
    const dataObj1 = Object.entries(obj1);
    const dataObj2 = Object.entries(obj2);
    return _.union([...dataObj1, ...dataObj2].flat());
}

function genDiff(filepath1, filepath2) {
    const path1 = path.resolve(filepath1);
    const path2 = path.resolve(filepath2);
    const dataFile1 = JSON.parse(fs.readFileSync(path1));
    const dataFile2 = JSON.parse(fs.readFileSync(path2));
    const result = getDifferent(dataFile1, dataFile2);
    return result;
}

export default genDiff;