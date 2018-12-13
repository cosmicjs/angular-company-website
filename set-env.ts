const fs = require('fs');
const argv = require('yargs').argv;

const environment = argv.environment ? `.${argv.environment}` : '';

const targetPath = `./src/environments/environment${environment}.ts`;

fs.readFile(targetPath, 'utf8', function(readError, data) {
  if (readError) {
    return console.log(readError);
  }
  let result = data;

  if (process.env.COSMIC_BUCKET) {
    console.log('Updating COSMIC_BUCKET');

    result = result.replace(/(bucket_slug:\s*')(.*)(',)/g, `$1${process.env.COSMIC_BUCKET}$3`);
  }
  if (process.env.COSMIC_READ_KEY) {
    console.log('Updating COSMIC_READ_KEY');

    result = result.replace(/(read_key:\s*')(.*)(',)/g, `$1${process.env.COSMIC_READ_KEY}$3`);
  }
  if (process.env.COSMIC_WRITE_KEY) {
    console.log('Updating COSMIC_WRITE_KEY');

    result = result.replace(/(write_key:\s*')(.*)(',)/g, `$1${process.env.COSMIC_WRITE_KEY}$3`);
  }

  fs.writeFile(targetPath, result, 'utf8', function(writeError) {
    if (writeError) {
      return console.log(writeError);
    }
  });
});
