const fs = require('fs');

const sequenceNames = [
  'seq_c_23164.REF_STRG_1_64511_XLOC_008442',
  'seq_c_34941.REF_STRG_1_77343_XLOC_008605',
  'seq_c_37243.REF_TRIN_14_03138_XLOC_008654',
  'seq_c_37235.REF_TRIN_9_00299_XLOC_008653'
];

// Define the template for file paths
const path = '../../data/gene_regions/{sequenceName}.{fileType}.tsv';

// Define the file types you want to repeat
const fileTypes = ['snps', 'windows', 'windows', 'windows', 'windows', 'mappings.windows_1000.at', 'mappings.windows_1000.at'];

const filesInFolder = sequenceNames.flatMap((sequenceName, sequenceIndex) => {
  return fileTypes.map((fileType, fileTypeIndex) => {
    if (fileTypeIndex >= 5) {
      // Use a different path for the last two file types
      return path.replace('{sequenceName}', sequenceName).replace('{fileType}', fileType).replace('../../data/gene_regions/', '../../data/gene_regions_data_mappings/');
    } else {
      return path.replace('{sequenceName}', sequenceName).replace('{fileType}', fileType);
    }
  });
});
// Number of files to include in each iteration
const filesPerIteration = 7;

// Output folder for generated HTML files
const outputFolder = '../generated_html/';

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

  const htmlContent = template.replace(
    /const filePaths = \[\];/,
    `const filePaths = ${JSON.stringify(filesForIteration)};`
  );

  // Replace the placeholder with actual file paths
  //const htmlContent = template.replace("const filePaths = [", `const filePaths = ${JSON.stringify(filesForIteration)}`);

  // Write the HTML file to the output folder
  fs.writeFileSync(`${outputFolder}plot_${i}.html`, htmlContent, 'utf-8');
}

console.log('HTML files generated successfully.');
