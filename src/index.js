import _ from 'lodash';
import { getPath, getData } from './parseJson.js';

function getDifferentObject(obj1, obj2) {
    const allKeys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));
    const result = allKeys.map((key) => {
        const oldValue = obj1[key];
        const newValue = obj2[key];
        if (!_.has(obj2, key)) {
            return {
                action: 'deleted',
                key,
                oldValue
        }
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
            key,
            oldValue
        };
    })
    .map((item) => {
        const result = [];
        if (item.action === 'deleted') {
            result.push(`- ${item.key}: ${item.oldValue}`);
            }
        if (item.action === 'unchanged') {
            result.push(`  ${item.key}: ${item.oldValue}`);
            }
        if (item.action === 'changed') {
            result.push(`- ${item.key}: ${item.oldValue}`);
            result.push(`+ ${item.key}: ${item.newValue}`);
            }
        if (item.action === 'added') {
            result.push(`+ ${item.key}: ${item.newValue}`);
            }
            return result;
        });
    return result.flat();
};

function genDiff(filepath1, filepath2) {
    const dataFile1 = getData(getPath(filepath1));
    const dataFile2 = getData(getPath(filepath2));
    const result = getDifferentObject(dataFile1, dataFile2);
    return result;
}

export default genDiff;