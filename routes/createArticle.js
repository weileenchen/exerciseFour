const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
  <h1>Create Article</h1>
  <form>
    <label for="articleTitle"> Article Title </label>
    <input type="text" name="articleTitle" placeholder="type article title"/>
    <button type="submit">Submit Article </button>
  </form>
  `);
});

module.exports = router;
