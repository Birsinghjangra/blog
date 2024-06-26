const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./backend/Database/db'); 
const authRoutes = require('./backend/routes/authRoutes');
const session = require("express-session");
const postRoutes= require("./backend/routes/postRoutes")

const app = express();
const PORT =  3001;

connectDB();  //connect to MongoDB
app.use(
  session({
    secret: "birsinghjangra15", 
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
