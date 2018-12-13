const fs = require('fs');
const argv = require('yargs').argv;

const environment = argv.environment ? `.argv.environment` : '';

const targetPath = `./src/environments/environment${environment}.ts`;

fs.readFile(targetPath, 'utf8', function(readError, data) {
  if (readError) {
    return console.log(readError);
  }
  const result = data
    .replace(/##COSMIC_BUCKET##/g, process.env.COSMIC_BUCKET)
    .replace(/##COSMIC_READ_KEY##/g, process.env.COSMIC_READ_KEY)
    .replace(/##COSMIC_WRITE_KEY##/g, process.env.COSMIC_WRITE_KEY);

  fs.writeFile(targetPath, result, 'utf8', function(writeError) {
    if (writeError) {
      return console.log(writeError);
    }
  });
});
