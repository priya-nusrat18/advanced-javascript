let bonus = 30;
function sum(first, second) {
    let result = first + second + bonus;
    console.log(result);
    if ( result > 9) {
        const mood = "happy";
        console.log(mood);
    }
    return result;
}
const output = sum( 3, 3);
console.log(output);