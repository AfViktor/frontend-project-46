#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
    .name('Compares two configuration files and shows a difference')
    .version('0.1.0')
    .option('-V, --version', 'output the version number')
    .option('-h, --help', 'output usage information')

program.parse();