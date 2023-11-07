const { Command }  = require('commander');
const program = new Command();

program
    .name('genDiff')
    .description('Compares two configuration files and shows a difference')
    .version('0.1.0');

program.command
    .description('Compares two configuration files and shows a difference')    
    .arguments('file1', 'file2')
    .option('-V, --version', 'output the version number')
    .option('-h, --help', 'output usage information')

program.parse();