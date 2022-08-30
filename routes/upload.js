var express = require('express');
var router = express.Router();
var mediainfo = require('mediainfos');
var formidable = require('formidable');

//app.use(fileUpload());

/*router.post('/', function(req, res, next) {
  //res.send({'data':'respond with a resource. You are at upload router'});
    console.log(req.files);
});
*/


router.post('/:type', function(req, res) {
    console.log('TYPE======',req.params.type);
  //if (!req.files)
    //return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  //let sampleFile = req.files.file_upload;
  //console.log('sampleFile',sampleFile);

  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {

      //console.log(files);
      var path = ''
      if (req.params.type=='L') {
          path = files.file_uploadL.path
      }

      if (req.params.type=='R') {
          path = files.file_uploadR.path
      }


      console.log('path',path);


      mediainfo(path, function(err, result) {
        if (err) {
          return console.log(err);
        }

        res.send(result)

        //console.log(res);
      });


})

/*
mediainfo("/Users/muthukumar/Downloads/720_bunny.mp4", function(err, res) {
  if (err) {
    return console.log(err);
  }

  console.log(res);
});
*/

  // Use the mv() method to place the file somewhere on your server
  //sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
    /*if (err)
      return res.status(500).send(err);
     */
    //res.send('File uploaded!');
  });



module.exports = router;
