import { useEffect, useState } from "react";
import { IQuote } from "../interfaces";
import { getRandomQuote } from "../QuoteApi";
import { getRandomColor } from "../helpers";
import XIcon from "../assets/XIcon";
import QuoteIcon from "../assets/QuoteIcon";

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
	const [color, setColor] = useState<string>(getRandomColor());

	useEffect(() => {
		setColor(() => getRandomColor());
		getRandomQuote(setQuote);
	}, []);

	useEffect(() => {
		const body = document.querySelector("body");
		body.style.color = color;
		body.style.backgroundColor = color;
	}, [color]);

	const buttonHandler = () => {
		setColor(() => getRandomColor());
		getRandomQuote(setQuote);
	};

	return (
		<div id="quote-box">
			<p id="text">
				<QuoteIcon fill={color} width="1.5rem" height="1.5rem" /> {quote?.content}
			</p>
			<p id="author">-{quote?.author}</p>
			<div className="buttons">
				<a
					href="twitter.com/intent/tweet"
					target="_blank"
					id="tweet-quote"
					style={{ backgroundColor: color }}
				>
					<XIcon fill="white" width="1.2rem" height="1.2rem" />
				</a>
				<button id="new-quote" onClick={buttonHandler} style={{ backgroundColor: color }}>
					New Quote
				</button>
			</div>
		</div>
	);
};

export default RandomQuote;
