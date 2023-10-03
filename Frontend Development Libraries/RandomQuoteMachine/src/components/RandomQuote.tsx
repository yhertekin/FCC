import React from "react";
import { useEffect, useState } from "react";

const endPoint = "https://api.quotable.io/quotes/random";

interface IQuote {
	_id: string;
	content: string;
	author: string;
	tags: string[];
	authorSlug: string;
	length: number;
	dateAdded: string;
	dateModified: string;
}

const initialQuote: IQuote = {
	_id: "",
	content: "",
	author: "",
	tags: [],
	authorSlug: "",
	length: 0,
	dateAdded: "",
	dateModified: "",
};

const RandomQuote = () => {
	const [quote, setQuote] = useState<IQuote>(initialQuote);

	useEffect(() => {
		getRandomQuote();
	}, []);

	const getRandomQuote = () => {
		getRandomColor();
		return fetch(endPoint)
			.then((response) => response.json())
			.then((data) => setQuote(data[0]));
	};

	return (
		<div id="quote-box">
			<p id="text">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
					<path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
				</svg>{" "}
				{quote?.content}
			</p>
			<p id="author">--{quote?.author}</p>
			<div className="buttons">
				<a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
						<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
					</svg>
				</a>
				<button id="new-quote" onClick={getRandomQuote}>
					New Quote
				</button>
			</div>
		</div>
	);
};

function getRandomColor() {
	const availableCharacters = "0123456789ABCDEF";
	const availableCharacterLength = availableCharacters.length;

	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += availableCharacters[Math.floor(Math.random() * availableCharacterLength)];
	}

	const body = document.querySelector("body");
	body.style.backgroundColor = color;
	body.style.color = color;

	return color;
}

export default RandomQuote;
