// Iterates through all files in a folder and extracts sequence names.

const fs = require('fs');
const path = require('path');

const folderPath = '../data/genes/';

// Read all files in the folder
const files = fs.readdirSync(folderPath);

// Extract sequence names from filenames
const sequenceNames = files.map((file) => {
  // Regular expression to extract the entire filename, excluding ".gff"
  const match = file.match(/^(seq.+)\.gff$/);

  // Check if there is a match, and return the extracted sequence name
  return match ? match[1] : null;
}).filter(Boolean); // Filter out null values

// Export the sequence names
module.exports = { sequenceNames };



