// 写一个正则表达式 匹配所有 Number 直接量

let number_reg = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/;


// 写一个 UTF-8 Encoding 的函数

function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}


// 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

let string_double_reg = '(?:[^"\n\\\r\u2028\u2029]\\(?:["\\bfnrtv\n\r\u2028\u2029]|\r\n|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux"\\bfnrtv\n\\\r\u2028\u2029])*';
let string_single_reg = "(?:[^'\n\\\r\u2028\u2029]\\(?:['\\bfnrtv\n\r\u2028\u2029]|\r\n|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'\\bfnrtv\n\\\r\u2028\u2029])*";