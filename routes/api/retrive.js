const express = require("express");
const router = express.Router();
const app = express();
const schema = require("../../config/schema");

router.get("/:id",(req,res)=>{
  console.log(req.params.id);
  const val = req.params.id;
    schema
        .find({ shortUrl : val })
        .exec(function (err, longUrl) {
            if (err) return handleError(err);            
            console.log(longUrl);
            res.status(301).redirect(longUrl[0].longUrl);
            
    });
});



module.exports = router;
