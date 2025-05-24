// const products = [
//     {
//         image: "images/image1.webp",
//         price : 747000,
//         discount : 45,
//         originalPrice : 1_350_000,
//         name : "محصول یک"
//     },
//     {
//         image: "images/image2.webp",
//         price : 799000,
//         discount : 44,
//         originalPrice : 1_420_000,
//         name : "محصول دو"
//     },
// ]

// let content = ``
// for (let i = 0; i < products.length; i++) {
//     content = content + `
//     <div class="">
//         <img src="${products[i].image}" alt="">
//         <h2>${products[i].name}</h2>
//         <span>${products[i].price}</span>
//         <span>${products[i].discount}</span>
//         <span>${products[i].originalPrice}</span>
//     </div>
//     `
// }
// document.getElementById("content").innerHTML = content

// setTimeout(() => {
//     console.log("Time is up")
// }, 5000)

const images = [
    "images/swiper/image1.webp",
    "images/swiper/image2.webp",
    "images/swiper/image3.webp",
    "images/swiper/image4.webp",
]

const banner = document.getElementById("banner")
let imageIndex = 0
banner.src = images[imageIndex]

const handleNext = () => {
    if (imageIndex == images.length - 1) {
        imageIndex = 0
        banner.src = images[imageIndex]
    } else {
        imageIndex += 1
        banner.src = images[imageIndex]
    }
}
const handlePrev = () => {
    if (imageIndex == 0) {
        imageIndex = images.length - 1
        banner.src = images[imageIndex]
    } else {
        imageIndex -= 1
        banner.src = images[imageIndex]
    }
}

setInterval(() => {
    if (imageIndex == images.length - 1) {
        imageIndex = 0
        banner.src = images[imageIndex]
    } else {
        imageIndex += 1
        banner.src = images[imageIndex]
    }
}, 4000)