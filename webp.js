const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const os = require('os');


/**
 * @param {string[]} str
 * @return {string}
 */
const longestCommonPrefix = function (str) {
  let f = str[0];
  let result = '';
  if (str.length == 0) {
    return result;
  }
  for (let i = 0; i < f.length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (f[i] !== str[j][i]) {
        return result;
      }

    }
    result += f[i];
  }
  return result;
};

const exeName = os.platform() === 'win32' ? 'img2webp.exe' : 'img2webp';

const toolPath = path.join(process.cwd(), exeName);

const config = require(path.join(process.cwd(), './config.js'));

const suffix = '.png';

let argPath = process.argv[2];
if (argPath && !path.isAbsolute(argPath)) {
  argPath = path.resolve(process.cwd(), argPath);
}
const workPath = argPath ?? process.cwd();

console.log('work path:', workPath);


// scan dir
let list = fs.readdirSync(workPath);

list = list.filter((filename) => filename.endsWith(suffix));

const outputFileName = longestCommonPrefix(list);

list = list.map(file => path.join(workPath, file));

const outputFile = path.join(workPath, `${outputFileName}.webp`);

const { args = [] } = config;

const cmdArgs = [...args, ...list, '-o', outputFile];

console.log(list.join('\n'));
console.log('merging', list.length, 'pics.');

cp.spawn(toolPath, cmdArgs, { stdio: 'inherit' });
