// const productsDIV = document.getElementById("products")

// const products = [
//     "خرید اکانت نتفلیکس Netflix آمریکا ارزان قابل تمدید (شارژ آنی)",
//     "خرید اکانت یوتیوب پرمیوم YouTube Premium + Music فوری",
//     "خرید اشتراک و اکانت اپل وان Apple One (شارژ خودکار سیستمی)",
//     "خرید اشتراک و اکانت اپل وان Apple One (شارژ خودکار سیستمی)",
// ]

// let content = ``
// for (let i = 0; i < products.length; i++) {
//     content = content + `<h2 class="card">${products[i]}</h2>`
// }
// console.log(content)
// productsDIV.innerHTML = content

// const product = {
//     name: "محصول یک",
//     price: 190000,
//     image: "image.png",
//     link: "/products/1",

// }
// console.log(product.price)




const productsDIV = document.getElementById("products")

const products = [
    {
        name: "محصول یک",
        price: 190000,
        image: "image.png",
        link: "/products/1",
        info: [
            {
                name: "نوع گوشی موبایل",
                value: "سیستم عامل اندروید"
            }
        ]
    },
    {
        name: "محصول دو",
        price: 120000,
        image: "image2.png",
        link: "/products/2",
        info: [
            {
                name: "نوع گوشی موبایل",
                value: "سیستم عامل اندروید"
            },
        ]
    },
]

let content = ``
for (let i = 0; i < products.length; i++) {
    content = content + `<h2 class="card">${products[i].name} - ${products[i].price}</h2>`
    for(let y =0 ; y < products[i].info.length;y++){
        content = content + `<h5 class="card">${products[i].info[y].name} - ${products[i].info[y].value} </h5>`
    }
}
console.log(content)
productsDIV.innerHTML = content


console.log(products[0].name)

// function test(){

// }
// const test = () => {

// }


