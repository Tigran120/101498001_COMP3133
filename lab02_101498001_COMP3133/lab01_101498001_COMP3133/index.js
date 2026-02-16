const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

function deleteFileIfExists(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted existing file: ${filePath}`);
    }
}

deleteFileIfExists(canadaFile);
deleteFileIfExists(usaFile);

const canadaData = [];
const usaData = [];

fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        if (row.country.toLowerCase() === 'canada') {
            canadaData.push(row);
        }
        if (row.country.toLowerCase() === 'united states') {
            usaData.push(row);
        }
    })
    .on('end', () => {
        console.log('CSV file processing completed.');
        
        if (canadaData.length > 0) {
            let canadaContent = 'country,year,population\n';
            canadaData.forEach(row => {
                canadaContent += `${row.country.toLowerCase()},${row.year},${row.population}\n`;
            });
            fs.writeFileSync(canadaFile, canadaContent);
            console.log(`Written ${canadaData.length} records to ${canadaFile}`);
        }
        
        if (usaData.length > 0) {
            let usaContent = 'country,year,population\n';
            usaData.forEach(row => {
                usaContent += `${row.country.toLowerCase()},${row.year},${row.population}\n`;
            });
            fs.writeFileSync(usaFile, usaContent);
            console.log(`Written ${usaData.length} records to ${usaFile}`);
        }
        
        console.log('Processing complete!');
    })
    .on('error', (error) => {
        console.error('Error reading CSV file:', error);
    });
