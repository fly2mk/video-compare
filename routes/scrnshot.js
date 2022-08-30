var express = require('express');
var router = express.Router();
const screenshot = require('screenshot-desktop')
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

      screenshot({ filename: 'shot.jpg' }).then((imgPath) => {
        // imgPath: absolute path to screenshot
        // created in current working directory named shot.png
        //res.send(imgPath);
      });

      var fileName = "splitview_"+Math.floor(Date.now() / 1000)+'.png'

      // absolute paths work too. so do pngs
      screenshot({ filename: 'public/screenshots/'+fileName })
      res.send(fileName);

});

module.exports = router;
