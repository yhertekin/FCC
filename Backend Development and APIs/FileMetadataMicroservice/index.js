var express = require("express");
const multer = require("multer");
const upload = multer({ dest: "./public/uploads/" });
var cors = require("cors");
require("dotenv").config();

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
	const metadata = {
		name: req.file.originalname,
		type: req.file.mimetype,
		size: req.file.size,
	};

	res.json(metadata);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Your app is listening on port " + port);
});
