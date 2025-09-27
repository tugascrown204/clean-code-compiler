const CleanCodeCompiler = require('./CleanCodeCompiler');

const compiler = new CleanCodeCompiler();

compiler.initialize();

// Example of how to use the compiler
compiler.analyzeCode('const x = 1;');
compiler.getFeedback();