const express = require("express");

// Middleware to allow for routing on the node server
const router = express.Router();

const firestore = require("firebase/firestore");
// Initialize Firestore database
const db = firestore.getFirestore();
// get all articles from firebase
router.get("/", (req, res) => {
  // blogposts = function
  const blogposts = firestore.getDocs(firestore.collection(db, "blogposts"));

  const blogpostsArray = [];

  blogposts
    .then((response) => {
      // Push document from blogposts into the blogposts array
      response.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    .catch(function (error) {
      console.log("Error: ", error);
      return res.send(error);
    });
});

module.exports = router;
