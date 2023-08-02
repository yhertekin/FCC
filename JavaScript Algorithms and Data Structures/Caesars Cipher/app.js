function rot13(str) {
	let result = "";
	str.split("").forEach((char) => {
		if (/\w/gi.test(char)) {
			let value = char.charCodeAt(0) + 13;
			result += String.fromCharCode(value > 90 ? (value % 90) + 64 : value);
		} else {
			result += char;
		}
	});
	return result;
}

rot13("SERR PBQR PNZC");
