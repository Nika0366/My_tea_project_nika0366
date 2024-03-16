// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Helper function to reverse a string
function reverseString(string) {
    return string.split('').reverse().join('');
}

// Helper function to count the number of words in a string
function countWords(string) {
    return string.split(/\s+/).length;
}

// Example usage of helper functions
console.log(capitalizeFirstLetter("hello")); // "Hello"
console.log(reverseString("world"));         // "dlrow"
console.log(countWords("This is a sentence.")); // 4
