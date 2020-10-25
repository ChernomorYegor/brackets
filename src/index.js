module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let brackets = [];

    for (let item of bracketsConfig) {
        brackets = brackets.concat(item);
    }

    for (let i = 0; i < str.length; i++) {
        let bracketIndex = brackets.lastIndexOf(str[i]);

        if ( ((bracketIndex + 1) % 2) === 0
            && brackets[bracketIndex] === str[i]
            && brackets[bracketIndex - 1] === stack[stack.length - 1] ) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }

    return !stack.length;
}
