function palindrome(str) {
    let copy = str.replace(/\W|_/gi, "");
    return copy.toLowerCase() === copy.toLowerCase().split("").reverse().join("");
}

palindrome("e y e");
