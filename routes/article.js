const express = require("express");

const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

// Get a single article by ID
// article/:id
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const blogpost = firestore.getDoc(firestore.doc(db, "blogposts", postId));

  blogpost
    .then((response) => {
      const post = response.data();
      if (post) return res.send(post);
      return res.send(`No doc... sorry`);
    })
    .catch((error) => {
      res.send(`No doc... sorry`);
    });
});

router.get("/", (req, res) => {
  res.send(`
    Please include an ID
  `);
});

module.exports = router;
