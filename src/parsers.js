import yaml from 'js-yaml';

function parse(data, format) {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
  }
}

export default parse;
