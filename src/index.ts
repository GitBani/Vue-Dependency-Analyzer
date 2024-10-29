import { Command } from 'commander'; 
import { analyzeProject } from './analyze';
import { log } from 'node:console';
import { generateDOTCode } from './generateDOTCode';

const program = new Command();

program
    .version('1.0.0')
    .description('Analyze pinia store dependency graph')
    .argument('<projectDirectoryPath>', 'Path to the `src` directory of the project to analyze')
    .action((srcDirectoryPath: string) => {
        const graph = analyzeProject(srcDirectoryPath);
        generateDOTCode(graph);
        
    });

program.parse(process.argv);