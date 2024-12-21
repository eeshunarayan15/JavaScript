// this call apply bind
// this keyword in js mein one of
// the most suspensful keyword
// keyword ka matlab hota hai aisa word jiska koi matlab ho PerformanceNavigationTiming
// lang mein
// this ki value baar baar badal sakti hai alag alag conditions mein, saari conditions ko
// seekh jaao to this ko samajh jaaoge
// =====================
// global -window
// console.log(this)
// ******************************
// function  window
// function abcd() {
//     console.log(this)
// }
// abcd()





// method object
// var obj = {
//     name: function () {
//         console.log(this)
        
//     },
//     age: 25,
//     email:"eeshu@gmail.com"
// }
// obj.name()
// jab ham object ki value ko function kar dete hai too
// wo function kahlata hai
//==========================================================
// function inside method(es5)object
// var obj2 = {
//     sayName: function () {
//         console.log(this)
//         function childfunc() {
//             console.log(this)
            
//         }
//         childfunc()
//     }
// }
// obj2.sayName()


// function inside method(es6)new blank object


// var obj3 = {
//     name: function () {
//          console.log(this)
//         const child = () => {
//             console.log(this)
//         }
//         child()
//     }
// }
// // yaha this apne parent se value le raha hai
// obj3.name()




// ==========================================
// var obj4 = {
//     sayName: () => {
//         console.log(this);
        
//     }
// }
// obj4.sayName()
// constructor function mein this ki value - new blank object


// function add() {
//     console.log(this)
    
// }
// const ans = new add()


//event listener mein this ke value -that element jispe lis lagaya gaya ho
// document.querySelector("button")
//     .addEventListener("click", function () {
//         console.log("heloow")
//         console.log(this);
// })
// yaha button return hoga 