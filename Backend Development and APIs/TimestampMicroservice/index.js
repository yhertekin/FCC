var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

const isInvalidDate = (date) => date.toUTCString() == "Invalid Date";

app.get("/api/:date?", function (req, res) {
	let dateParam = req.params.date;

	if (!dateParam) {
		const currentDate = new Date();
		return res.json({ unix: currentDate.getTime(), utc: currentDate.toUTCString() });
	}

	dateParam = Number(dateParam) || dateParam;
	let date = new Date(dateParam);

	if (isInvalidDate(date)) {
		console.log(date);
		return res.json({ error: "Invalid Date" });
	}

	res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

var listener = app.listen(process.env.PORT, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
