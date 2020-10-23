const express = require("express");
const router = express.Router();

const schema = require("../../config/schema");
router.post("/", (req, res) => {
  const longUrl  = req.body.abc;
  // res.send(req.body.abc);
  var shortUrl='';
  var flag = true;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  while(flag==true){
    for ( var i = 0; i < 5; i++ ) {
        shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    schema
        .find({ shortUrl : shortUrl })
        .exec(function (err, longUrl) {
          if (err) return handleError(err);
          console.log("continue");
      });
      schemaUpload  = new schema({
        shortUrl,
        longUrl
        });
        schemaUpload.save()
        flag=false;
    }
  // req.body.abc
// window.alert("The short URL is:"+shortUrl);
  console.log(shortUrl)
  res.send(shortUrl);
  console.log(req.body);
});


module.exports = router;
