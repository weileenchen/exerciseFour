const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World in Route!");
});

module.exports = router;
