// call apply and bind
// ye teen tareeke ahi function ko call karne ke kisis object ko this maan kar 
const obj = { name: "harsh" }
function abcd() {
    console.log(this)
}
abcd.call("12")