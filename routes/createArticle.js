const express = require("express");

const router = express.Router();

const form = `
<h1>Create Article</h1>
<form action="/create/submit">
  <div style="
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      max-width: 325px;
  >
    <label for="articleTitle"> Article Title </label>
    <input type="text" name="articleTitle" placeholder="type article title"/>
    <label for="articleText"> Article Text </label>
    <input type="text" name="articleText" placeholder="type article text..."/>
    <label for="author"> Author </label>
    <input type="text" name="author" placeholder="Author name..." />
  </div>
  <button type="submit">Submit Article </button>
</form>
`;

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

router.get("/", (req, res) => {
  res.send(form);
});

// API endpoint for submitting data through our form
router.get("/submit", (req, res) => {
  const queryParams = req.query;
  const title = queryParams.articleTitle;
  const text = queryParams.articleText;
  const author = queryParams.author;

  const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();

  const setBlogPost = firestore.setDoc(
    firestore.doc(db, "blogposts", idFromTitle),
    {
      title,
      text,
      author,
    }
  );

  setBlogPost
    .then((response) => {
      res.send(`
      <h1>Submission Successful!</h1>
      <p><a href="/create">Add Another Post</a></p>
      `);
    })
    .catch((error) => {
      console.warn(error);
      res.send(error);
    });
});

module.exports = router;
