function makeHuman(name,age) {
    this.name = name;
    this.age = age;
}
makeHuman.prototype.printMyName = function () {
    console.log(this.name)
}
const human1 = new makeHuman("Harsh", 25)
const human2 = new makeHuman("Harshita", 25)
console.log(human1)
console.log(human2)
//new key word fucntion call karne pe blank object deta hai
//this keyword se ham value set kar sakte hai

// ek function jo ki this ka upyog kar raha ho and new 
//     ke dwaara naye naye objects kar deta ho aisa function ko 
//     constructor function kehlata hai



// aisa koi bhi function jismein aap this ka upyog 
// kar rahe ho aur 
// us function ko call karte waqt aap new 
// upyog karein ,to new ka matlab waha par 
// ek blank object ho jata ahi