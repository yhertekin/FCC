const endPoint = "https://api.quotable.io/quotes/random";

export const getRandomQuote = () => {
	return fetch(endPoint).then((response) => response.json());
};
