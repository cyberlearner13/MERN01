const express = require('express');
const router = new express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.get("/",(req,res)=>{
  res.send({
    "name":"JoJo"
  });
});

router.get("/guest",(req,res)=>{
  res.send({
    "title":"Hello guest"
  });
});

//Sign Up
router.post("/users", async(req, res) => {
  // TODO: The sign up body
});

module.exports = router;
