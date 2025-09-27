const CleanCodeCompiler = require('./src/CleanCodeCompiler');

const compiler = new CleanCodeCompiler();

compiler.initialize();

// Example of how to use the compiler
compiler.analyzeCode('const x = 1;');
const feedback = compiler.getFeedback();
console.log(feedback);