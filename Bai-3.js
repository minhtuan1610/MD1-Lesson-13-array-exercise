let str = prompt("Enten a text string");
let UPPER = "ABCDEFGHILKLMNOPQRSTUVWXYZ";
let LOWER = "abcdefghijklmnopqrstuvwxyx";
let result = [];
for (let i = 0; i < str.length; i++) {
    if (UPPER.indexOf(str[i]) !== -1) {
        result.push(str[i].toLowerCase());
    } else if (LOWER.indexOf(str[i] !== -1)) {
        result.push(str[i].toUpperCase());
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(""));