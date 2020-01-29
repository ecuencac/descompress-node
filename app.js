var DecompressZip = require('decompress-zip');

var filename = './input/test.zip';

var unzipper = new DecompressZip(filename)
 
unzipper.on('error', function (err) {
    console.log('Caught an error');
});
 
unzipper.on('extract', function (log) {
    console.log('Finished extracting');
});
 
unzipper.on('progress', function (fileIndex, fileCount) {
    console.log('Extracted file ' + (fileIndex + 1) + ' of ' + fileCount);
});
 
unzipper.extract({
    path: 'output',
    filter: function (file) {
        return file.type !== "SymbolicLink";
    }
});