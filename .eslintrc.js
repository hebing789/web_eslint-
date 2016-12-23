module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    //"parserOptions": {
    //    "ecmaFeatures": {
    //        "jsx": true
    //    },
    //    "sourceType": "module"
    //},
    "rules": {

        //"linebreak-style": [
        //    "error",
        //    "unix"
        //],
        //
        ////缺少分号error
        //"semi": [
        //    "error",
        //    "always"
        //],
        ////禁止不必要的括号
        //'no-extra-parens':'error',
        ////不要额外的分号
        //'no-extra-semi':'error',
        ////允许打印
        //'no-console': 'off',
        ////4个空格缩进,否则error
        //'indent': [ 'error', 4 ],
        ////要求或禁止末尾逗号
        //'comma-dangle':'error',
        //
        //
        ////禁止在变量定义之前使用它们
        //'no-use-before-define':'error',
        ////禁止 function 定义中出现重名参数
        //'no-dupe-args':'error',
        ////禁止在字符串和注释之外不规则的空白
        //'no-irregular-whitespace':'error',
        ////禁止在return、throw、continue 和 break语句之后出现不可达代码
        //'no-unreachable':'error',
        //
        ////要求使用 JSDoc 注释
        //'require-jsdoc':'error',
        ////强制使用有效的 JSDoc 注释
        //'valid-jsdoc':'error',
        //
        ////要求构造函数首字母大写
        //'new-cap':'error',
        ////强制使用骆驼拼写法命名约定
        //'camelcase':'error',
        //
        ////必须使用 if(){} 中的{}
        //"curly": [2, "all"],
        ////要求 IIFE 使用括号括起来,立即执行的函数块必须用小括号阔起来
        //'wrap-iife':'error',
        ////不以新行开始的块{前面要不要有空格
        //"space-before-blocks": [0, "always"],
        ////禁止类成员中出现重复的名称
        //'no-dupe-class-members':'error',
        ////禁止修改 const 声明的变量
        //'no-const-assign':'error',
        ////一元运算符的前/后要不要加空格//验证后貌似没效果
        //"space-unary-ops": [0, { "words": true, "nonwords": false }],
        ////只让用tab键
        //"indent": [
        //    "error",
        //    "tab"
        //],
    }
};