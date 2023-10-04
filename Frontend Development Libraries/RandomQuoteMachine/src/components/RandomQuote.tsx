import { useEffect, useState } from "react";
import { IQuote } from "../interfaces";
import { getRandomQuote } from "../QuoteApi";
import Twitter from "./../assets/x-twitter.svg";
import Quote from "./../assets/quote-left-solid.svg";

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
		getRandomQuote(setQuote);
	}, []);

	const buttonHandler = () => {
		getRandomQuote(setQuote);
	};

	return (
		<div id="quote-box">
			<p id="text">
				<img src={Quote} alt="quote icon" /> {quote?.content}
			</p>
			<p id="author">-{quote?.author}</p>
			<div className="buttons">
				<a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
					<img src={Twitter} alt="twitter icon" />
				</a>
				<button id="new-quote" onClick={buttonHandler}>
					New Quote
				</button>
			</div>
		</div>
	);
};

export default RandomQuote;
