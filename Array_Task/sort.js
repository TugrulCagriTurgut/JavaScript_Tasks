
const {cars}= require ("./data");



const result = cars.sort ((a, b) =>{
        if (a.name > b.name) {
            return 1;
        }
        else {
            return -1;
        }
    });
    
console.table (result);