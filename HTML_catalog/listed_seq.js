const fs = require('fs');
const path = require('path');

const folderPath = './test_data';

// Read all files in the folder
const files = fs.readdirSync(folderPath);

// Extract sequence names from filenames
const sequenceNames = files.map((file) => {
  // Use regular expression to extract the entire filename (excluding ".gff")
  const match = file.match(/^(seq_c_\d+\..+)\.gff$/);

  // Check if there is a match, and return the extracted sequence name
  return match ? match[1] : null;
}).filter(Boolean); // Filter out null values

// Export the sequence names
module.exports = { sequenceNames };




