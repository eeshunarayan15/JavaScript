// aisa function jo ek aur function


// ko return karde usey closure kahte hai 
function counter() {
    var count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
var res = counter()
res()
console.log(res())
console.log(res())
console.log(res())
console.log(res())
console.log(res())
console.log(res())
// aab yaha ho kya raha hai ke return kiye hue function ko aapn function
// khatam hone ke baad bhi call rahe hai

function timer() {
    var a = 10;
    return setTimeout(() => {
        console.log(a)
        
    }, 2000);

}
var res = timer()
