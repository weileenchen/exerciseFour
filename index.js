const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Firebase code
const firebase = require("firebase/app");
// config object communicates with firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJnQu6HgTZQYydGLpT5F3wh2awKdrUlC4",
  authDomain: "exercisefour-745dd.firebaseapp.com",
  projectId: "exercisefour-745dd",
  storageBucket: "exercisefour-745dd.appspot.com",
  messagingSenderId: "644961107928",
  appId: "1:644961107928:web:9805da4a3f3fe40575bcad",
};

firebase.initializeApp(firebaseConfig);

// direct user to right place
const indexRoute = require("./routes/index");
const articleRoute = require("./routes/article");
const createArticleRoute = require("./routes/createArticle");

app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/create", createArticleRoute);

// listen for requests
app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
