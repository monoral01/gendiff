#!/home/kirito/.nvm/versions/node/v16.10.0/bin/node
/*! !!!!!!!!FIXME!!!!!!!! */

import { program } from 'commander';

program
  .version('1.0.0')
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<path1> <path2>')
  .option('-f, --format', 'output format');
program.parse(process.argv);
