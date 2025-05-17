
// function sum(number1, number2) {
//     const result = number1 + number2
//     return result
// }

// const res = sum(10, 20)
// console.log(res)

// Snake Case
// function change_theme(){

// }
// Camel Case
// const body = document.getElementById("body")
// function changeTheme(color) {
//     body.style.backgroundColor = color
// }

const title = document.getElementById("title")
// title.style.display = "none"
function changeLang(lang) {
    
    if (lang === "FA") {
        title.innerText = "سلام"
    } else if (lang === "EN") {
        title.innerText = "Hello"
    } else {
        console.log("Wrong Lang")
    }

}

