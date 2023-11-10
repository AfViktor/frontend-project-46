import _ from 'lodash';
import { getPath, getData } from './parseJson.js';

function getDifferentObject(obj1, obj2) {
    const dataObj1 = JSON.stringify(obj1).split(' ');
    const dataObj2 = JSON.stringify(obj2).split(' ');
    const str = _.union([...dataObj1, ...dataObj2].flat());
    const strClone = _.cloneDeep(str).sort();
    return strClone.join(' ');;
}

function genDiff(filepath1, filepath2) {
    const dataFile1 = getData(getPath(filepath1));
    const dataFile2 = getData(getPath(filepath2));
    const result = getDifferentObject(dataFile1, dataFile2);
    return result;
}

export default genDiff;