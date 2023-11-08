#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
    .name('gendiff')
    .version('0.1.0')
    .description('Compares two configuration files and shows a difference.')
    .argument('filepath1', 'path to file1')
    .argument('filepath2', 'path to file2')
    .option('-f, --format <type>', 'output format')

program.help();