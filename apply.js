// call apply and bind
// ye teen tareeke ahi function ko call karne ke kisis object ko this maan kar 
const obj = { name: "harsh" }
function abcd(a,b,c) {
    console.log(this,a,b,c)
}
abcd.apply(obj,[1,2,3])