import CSVToJson from 'csvtojson';
import chalk from 'chalk';
import fs from 'fs';

const csvFile = 'csv/data.csv';
const txtFile = 'csv/data.tsx';

const readStream = fs.createReadStream(csvFile, { encoding: 'utf8' });
const writeStream = fs.createWriteStream(txtFile);

readStream
  .pipe(CSVToJson())
  .pipe(writeStream)
  .on('error', (error) => {
    console.log(chalk.red(`Error: ${error.message}`));
    process.exit(0);
  })
  .on('finish', () => {
    console.log(chalk.green('File is proceeded'));
  });
