import { IQuote } from "./interfaces";

const endPoint = "https://api.quotable.io/quotes/random";

export const getRandomQuote = (setData: React.Dispatch<React.SetStateAction<IQuote>>) => {
	return fetch(endPoint)
		.then((response) => response.json())
		.then((data) => setData(data[0]));
};
