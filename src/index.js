import getDifferentObject from "../src/utils.js";
import makeFormat from "../src/formatters/index.js";
import { getData, getPath } from "./parsers.js";

function genDiff(filepath1, filepath2, format = "stylish") {
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);
  const dataFile1 = getData(path1);
  const dataFile2 = getData(path2);
  const dataDiff = getDifferentObject(dataFile1, dataFile2);
  const result = makeFormat(dataDiff, format);
  return result;
}

export default genDiff;
