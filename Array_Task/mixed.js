
const {cars}= require ("./data");



const result = cars.filter (item => item.type=="hatchback" & item.age>7).map(item => {
    return{
        list:item.list,
        name:item.name,
        type:item.type,
        age:item.age,
        sigortaBaslangic:item.sigortaBaslangic,
        sigortaBitis:item.sigortaBitis,
        uretimYili:2021-item.age,
    }
});

console.table (result);