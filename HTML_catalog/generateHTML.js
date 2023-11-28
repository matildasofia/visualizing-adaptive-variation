//generateHTML.js
const fs = require('fs');
const { sequenceNames } = require('./listed_seq.js');

// Define the template for file paths
const path = '../../data/gene_regions/{sequenceName}.{fileType}.tsv';

// Define the file types you want to repeat
const fileTypes = ['snps', 'windows', 'windows', 'mappings.windows_1000.at', 'mappings.windows_1000.me'];

const filesInFolder = sequenceNames.flatMap((sequenceName, sequenceIndex) => {
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

// Ensure the output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Calculate the number of iterations
const iterations = Math.ceil(filesInFolder.length / filesPerIteration);

// Read the template HTML file
const template = fs.readFileSync('./template.html', 'utf-8');

// Iterate through the files and generate HTML files
for (let i = 0; i < iterations; i++) {
  // Extract a chunk of files for this iteration
  const filesForIteration = filesInFolder.slice(i * filesPerIteration, (i + 1) * filesPerIteration);

  //const htmlContent = test.replace(
  const htmlContent = template.replace(
    /const filePaths = \[\];/,
    `const filePaths = ${JSON.stringify(filesForIteration)};`
  );

  // Write the HTML file to the output folder
  fs.writeFileSync(`${outputFolder}${filesForIteration[0].split('/')[4].slice(0, -9)}_${i}.html`, htmlContent, 'utf-8');
}

console.log('HTML files generated successfully.');
