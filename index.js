const path = require('path');
const ffi = require('ffi');

const lib = ffi.Library(path.join(__dirname, './target/release/libnodejs_rust'), {
    fibonacci: ['int', ['int']]
});

const fibRet = lib.fibonacci(21);

console.assert(typeof fibRet === 'number', 'Result of lib.fibonacci is number');
console.assert(fibRet === 10946, 'Result of lib.fibonacci(21) is 10946');

console.info(`"Tests" Passed Successfully`);