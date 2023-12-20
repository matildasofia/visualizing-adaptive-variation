// Generates one HTML page for each candidate gene.

const fs = require('fs');
const { sequenceNames } = require('./listed_seq.js');

// Define the template for file paths for data in plot 1-4
const path = '../../data/gene_regions/{sequenceName}.{fileType}.tsv';

// Define the file types you want to use for each candidate gene
// [plot 1, plot 1, plot 2-4, plot 5-8, plot 5-8]
const fileTypes = ['snps', 'windows', 'windows', 'mappings.windows_1000.at', 'mappings.windows_1000.me'];

// sequenceNames imported from './listed_seq.js'
const filesInFolder = sequenceNames.flatMap((sequenceName) => {
  return fileTypes.map((fileType, fileTypeIndex) => {
    if (fileTypeIndex >= 3) {
      // Use a different path for the last two file types
      return path.replace('{sequenceName}', sequenceName).replace('{fileType}', fileType).replace('../data/gene_regions/', '../data/gene_regions.data_mappings/');
    } else {
      return path.replace('{sequenceName}', sequenceName).replace('{fileType}', fileType);
    }
  });
});

// Number of files to include in each iteration
const filesPerIteration = 5;

// Output folder for generated HTML files
const outputFolder = './all_candidate_genes/';

// Ensure the output folder exists, or create it 
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Calculate the number of iterations
const iterations = Math.ceil(filesInFolder.length / filesPerIteration);

// Read template HTML file
const template = fs.readFileSync('./template.html', 'utf-8');

// Iterate through all files and generate HTML files
for (let i = 0; i < iterations; i++) {
  const filesForIteration = filesInFolder.slice(i * filesPerIteration, (i + 1) * filesPerIteration);

  // Set filePaths in template file to the actual file paths for currect candidate gene 
  const htmlContent = template.replace(
    /const filePaths = \[\];/,
    `const filePaths = ${JSON.stringify(filesForIteration)};`
  );

  // Write the HTML file to the output folder
  fs.writeFileSync(`${outputFolder}${filesForIteration[0].split('/')[4].slice(0, -9)}_${i}.html`, htmlContent, 'utf-8');
}

console.log('HTML files generated successfully.');
