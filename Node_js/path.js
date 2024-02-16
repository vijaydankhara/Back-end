// Path Module

const path = require('path');

// console.log(path.basename('D:\Back-end\Node_js/path.js'))   // path.js

// console.log(path.dirname('D:\Back-end\Node_js/path.js'))   // D:Back-endNode_js

// console.log(path.extname('D:\Back-end\Node_js/path.js'))    // .js

// console.log(path.isAbsolute('D:\Back-end\Node_js/path.js'))  // false

// console.log(path.normalize('D:\Back-end\Node_js/path.js'))  // D:Back-endNode_js\path.js

// console.log(path.parse('D:\Back-end\Node_js/path.js'));

// console.log(path.format({
//     root : 'D:\\', 
//     dir: 'D:\\Back-end\\Node_js\\path.js', 
//     base: 'path.js', 
//     ext:'.js'
// }))      // D:\Back-end\Node_js\path.js\path.js


// console.log(path.posix);
// console.log(path.delimiter);    // ;
// console.log(path.sep);   // \