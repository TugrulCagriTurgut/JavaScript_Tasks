  

const {cars}=require("./data");


const result = cars.some(item => item.name=="WW");

console.log (result);