/**
 * Created by bin_he on 2016/12/25.
 */
const fs = require('fs');
const shelljs = require('shelljs');

const jsFiles = [],
	LOG__PATH   = './diff.log',
	FILE = /diff --git a([\s\S]*?) /g,
	data = fs.readFileSync(LOG__PATH).toString(),
	_files = data.match(FILE),
	len = _files.length;

var i = 0;
while (i < len) {
	const _item = _files[i++].trim();
	if (!/.js$/.test(_item)) continue;
	const item = './' + _item.slice(13);
	if (!/^\.\/src\//.test(item)) continue; // src为eslint需要检测的顶级目录
	if (!fs.existsSync(item)) continue;
	jsFiles.push(item);
}
if (jsFiles.length === 0) {
	console.log('没有文件发生变化');
	console.log('');
	process.exit(1);
}
console.log('------------------------------');
console.log('     以下文件发生改变： ');
console.log(jsFiles.join('\n'));
console.log('------------------------------');
shelljs.exec('node ./node_modules/eslint/bin/eslint.js ' + jsFiles.join(' '));