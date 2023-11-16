import fs from "fs";
import path from "path";
import _ from "lodash";
import yaml from "js-yaml";

function getPath(str) {
  let result;
  const dirName = process.cwd(str);
  str.startsWith("/")
    ? (result = path.resolve(str))
    : (result = path.resolve(dirName, str));
  return result;
}

function getData(data) {
  if (data.endsWith(".json")) {
    return JSON.parse(fs.readFileSync(data));
  }
  if (data.endsWith(".yml") || str.endsWith(".yaml")) {
    return yaml.load(fs.readFileSync(data));
  }
}

export { getData, getPath };
