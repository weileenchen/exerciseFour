const express = require("express");

// Middleware to allow for routing on the node server
const router = express.Router();

const firebase = require("firebase/firestore/lite");
// Initialize Firestore database
const db = firebase.getFirestore();
// Reference to the blogposts collection
const blogposts = db.collection("blogposts");
// get all articles from firebase
router.get("/", (req, res) => {
  const blogpostsArray = [];

  // Push document from blogposts into the blogposts array
  res.send(blogpostsArray);
});

module.exports = router;
