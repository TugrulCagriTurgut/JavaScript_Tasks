
const {cars}=require("./data");



const result = students.map (item  =>{
    return{
            list:item.list,
            name:item.name,
            type:item.type,
            age:item.age,
            sigortaBaslangic:item.sigortaBaslangic,
            sigortaBitis:item.sigortaBitis,
    }
}).filter(item => item.type == "sedan").map(item => {
        return{
            list:item.list,
            name:item.name,
            type:item.type,
            age:item.age,
            sigortaBaslangic:item.sigortaBaslangic,
            sigortaBitis:item.sigortaBitis,
            sinif:"C sinifi",
        }
});

console.table (result);