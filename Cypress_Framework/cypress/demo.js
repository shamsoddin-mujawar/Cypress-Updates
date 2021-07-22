// const timeSolver = require('timeSolver');
// const date = new Date();
// const dateString = timeSolver.getString(date, "YYYY-MM-DD");
// console.log(dateString)

// const date = require("moment");
const faker = require('faker');
// 24 Hour format
// console.log(date().format("MM/DD/YYYY"));
// // 12 Hour format
// const currentDate = date().format("YYYY-MM-DD")
// console.log(currentDate)

// console.log(Math.floor((Math.random()*100000000) * 100))

// console.log(faker.name.gender())

let g = faker.name.gender()
console.log(g)
