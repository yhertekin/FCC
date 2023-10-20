const express = require("express");
const crypto = require("crypto");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const userDB = [];
const exerciseDB = [];

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/users", (req, res) => {
	const { username } = req.body;
	const _id = crypto.randomBytes(16).toString("hex");

	const user = { username, _id };
	userDB.push(user);
	res.json(user);
});

app.post("/api/users/:_id/exercises", (req, res) => {
	let { duration, date, description } = req.body;
	const userID = req.params._id;
	date = date ? new Date(date).toDateString() : new Date().toDateString();

	duration = Number(duration);

	exerciseDB.push({
		_id: userID,
		duration,
		date,
		description,
	});

	const user = userDB.find((user) => user._id == userID);
	console.log(user);
	res.json({ ...user, duration, date, description });
});

app.get("/api/users", (req, res) => {
	res.json(userDB);
});

app.get("/api/users/:_id/logs", (req, res) => {
	const userID = req.params._id;
	let { from, to, limit } = req.query;

	from = from && new Date(from).getTime();
	to = to && new Date(from).getTime();

	const exercises = exerciseDB
		.filter((exercise) => {
			if (exercise._id == userID) {
				if (from && to) {
					const current = new Date(exercise.date).getTime();
					if (current >= from && current <= to) {
						return exercise;
					}
				}
				return exercise;
			}
		})
		.slice(0, limit ?? this.length)
		.map((exercise) => {
			return {
				description: exercise.description,
				duration: exercise.duration,
				date: exercise.date,
			};
		});

	const user = userDB.find((user) => user._id == userID);

	const response = {
		...user,
		count: exercises.length,
		log: exercises,
	};

	res.json(response);
});

const listener = app.listen(process.env.PORT || 3000, () => {
	console.log("Your app is listening on port " + listener.address().port);
});
