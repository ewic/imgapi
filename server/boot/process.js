'use strict';
var fs = require("fs");

module.exports = function processQueue(server) {
  //Take all the files in queue and move them to where they need to go.

  var source_dir = "server/queue/",
      destination_dir = "common/content/full/",
      thumbs_dir = "common/content/thumb/";

  fs.readdir(source_dir, function(err, files) {

    // Select only .jpg files
    files.forEach(function(file) {
      // Save the original location of the file
      var source = source_dir + file;

      // Remove the extension
      file = file.split('.');
      var location = file[0];
      var extension = "." + file[1];

      // To ensure uniqueness, append the time to the filename.
      var date = new Date();
      location = location + date.getTime();

      // Generate a hash based on the filename
      location = crypto.createHash('md5').update(location).digest('hex');

      var model = {
        "location": location,
        "caption": "",
        "name": ""
      };

      var destination = destination_dir + location + extension;

      // Create a new entry in the db for this file
      // Insert the model into the database
      server.models.Photo.create(model, function(err, obj) {
        if (err) throw err;
        move(source, destination, function() {
          console.log(source, "processed");
        });
      });
    })
  });

};

function move(oldPath, newPath, callback) {

    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else {
                callback(err);
            }
            return;
        }
        callback();
    });

    function copy() {
        var readStream = fs.createReadStream(oldPath);
        var writeStream = fs.createWriteStream(newPath);

        readStream.on('error', callback);
        writeStream.on('error', callback);

        readStream.on('close', function () {
            fs.unlink(oldPath, callback);
        });

        readStream.pipe(writeStream);
    }
}