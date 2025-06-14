// const fs = require("fs")
// import axios from "axios"
// import fs from "fs"

// fs.readFile("read1.txt", "utf8", (error, data) => {
//     console.log("error is :", error)
//     console.log("data is :", data)
// })

// fs.writeFile("hello.html", "<h1>Hi</h1>", (err) => {
//     console.log(err)
// })
// import dotenv from "dotenv"
// dotenv.config()
// const connectDatabase =  () => {
//     console.log("Password :", process.env.DATABASE_PASSWORD )
// }

// connectDatabase()



// async function name() {

// }

// CommonJs
// const axios = require('axios');

// ES6 Module
import axios from "axios"

// console.log("Sending request to randomuser.me API...");
// axios.get("https://randomuser9.me/api/").then((res) => {
//     console.log("request completed.");
// }).catch((err) => {
//     console.error("request failed:");
// })

// console.log("End");

// const main = async () => {
//     console.log("Sending request to randomuser.me API...");
//     try {
//         const res = await axios.get("https://randomuser9.me/api/")
//         console.log(res.data)
//     } catch (err) {
//         console.error("request failed:", err.message);
//     }
//     console.log("End");
// }

// main()

// const divide = (number1, number2) => {
//     if (number2 === 0)
//         throw new Error("Cannot divide by zero");
//     console.log(number1 / number2);
// }

// divide(10 ,0)