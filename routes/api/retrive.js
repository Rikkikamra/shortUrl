const express = require("express");
const router = express.Router();
const app = express();
const schema = require("../../config/schema");

router.get("/:id",(req,res)=>{
  console.log(req.params.id);
  const val = req.params.id;
  // schemaUpload  = new schema({
  //   shortUrl: val,
  //   longUrl: "facebook.com"
  //   });

  //   schemaUpload.save()
    schema
        .find({ shortUrl : val })
        .exec(function (err, longUrl) {
            if (err) return handleError(err);            
            // res.redirect(String(longUrl[0].longUrl));
            console.log(longUrl);
            res.status(301).redirect(longUrl[0].longUrl);
            // window.location = longUrl[0].longUrl;
    });
    // res.render('index');
//   res.send(req.params.id);
});



module.exports = router;
