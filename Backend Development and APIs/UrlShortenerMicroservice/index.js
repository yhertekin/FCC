require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + "/views/index.html");
});

function isValidUrl(url) {
	const urlPattern =
		/^(http|https):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u002E\u003C\u003E]*)*(#[\w\-]+)*(\?[^\s]+)*$/;

	return urlPattern.test(url);
}

const db = [];
const addDataToDb = (url) => {
	const index = db.findIndex((d) => d.original_url == url);

	if (index >= 0) {
		return db[index];
	}

	db.push({ original_url: url, short_url: db.length + 1 });

	return db[db.length - 1];
};

app.post("/api/shorturl", function (req, res) {
	const original_url = req.body.url;

	if (!isValidUrl(original_url)) {
		return res.json({ error: "invalid url" });
	}

	const data = addDataToDb(original_url);

	return res.json(data);
});

app.get("/api/shorturl/:short_url", (req, res) => {
	const { short_url } = req.params;
	const index = db.findIndex((d) => d.short_url == short_url);

	if (index >= 0) {
		return res.redirect(db[index].original_url);
	}

	return res.json({ error: "invalid url" });
});

app.listen(port, function () {
	console.log(`Listening on port ${port}`);
});
