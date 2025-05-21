// const input = document.getElementById("age")


// function checkAge() {
//     // console.log(parseInt(input.value))
//     const age = parseInt(input.value)
//     if (age < 10) {
//         console.log("You are very young")
//     } else if (age >= 10 && age <= 18) {
//         console.log("10 - 18")
//     } else if (age > 18 && age <= 30) {
//         console.log("19 - 30")
//     } else if (age > 30) {
//         console.log("30>")
//     } else {
//         console.log("invalid input")
//     }
// }

const products = document.getElementById("prodcuts")
products.innerHTML = "<h2> تست</h2>"

const names = ["Amir","Reza","Mohammad"]
console.log(names[0])
// products.innerHTML = "<h2>" + names[0] + "</h2>"
products.innerHTML = `<h2> Hello : ${names[1]} </h2>`
