const express = require("express");
const app = express();
// const router = express.Router();
const mongoose = require("mongoose"); 
// const mongo = require("./mongo"); 
// const Post = require("./models/post"); 
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000  

// const multer = require("multer");
// const fs = require("fs");
const path = require("path");
// const { diskStorage } = require("multer");



app.use(bodyParser.json());
app.use(cors());



//mongoose
const url = "mongodb://127.0.0.1:27017/better"; // local host database name

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection; 
db.once("open", (_) => {
	console.log("Database connected:", url);
});

db.on("error", (err) => {
	console.error("connection error:", err);
});  


const postSchema = new mongoose.Schema({
	gender: {
		type: String,
		required: true,
	},
	name: {
		type: Object,
		required: true,
	},
	// location: {
	// 	type: Object,
	// 	required: true,
	// },
	email: {
		type: String,
		required: false,
	},
	// login: {
	// 	type: Object,
	// 	required: true,
	// },
	// dob: {
	// 	type: Object,
	// 	required: true,
	// },
	// registered: {
	// 	type: Object,
	// 	required: true,
	// },
	phone: {
		type: String,
		required: true,
	},
	// cell: {
	// 	type: String,
	// 	required: true,
	// },
	// id: {
	// 	type: Object,
	// 	required: true,
	// },
	picture: {
		type: Object,
		required: true,
	},
	nat: {
		type: String,
		required: true,
	},
});

const Post = mongoose.model("Post", postSchema);



//API routes
app.get("/", function(req, res){
    res.send("express is here");
})

app.get("/posts", function(req, res){
    Post.find().then(posts => res.json(posts));
})  

app.post("/posts/update", function(req, res){
    Post.find(
        { gender: req.params.gender },
        { nat: req.params.nat }

    ).then(posts => res.json(posts))
})

app.listen(port, function(req, res){
    console.log("express is listening");
})






{/* <select className="inputField " onChange={(e)=>{ console.log("called") setSelectedGender(e.target.value)}}>
        <option  className="fieldOption" selected >Male  </option>
        <option  className="fieldOption" >Female</option>
 </select>    */}
