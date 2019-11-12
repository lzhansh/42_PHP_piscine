const execSync = require('child_process').execSync;
const output = execSync('who', { encoding: 'utf-8' });
process.stdout.write(output);
