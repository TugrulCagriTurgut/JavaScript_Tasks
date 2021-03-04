
const {cars}= require ("./data");

//KOŞULU KAÇINCI ELEMENTTE BULURSA ORADAKİ SAYIYI SÖYLER. 
//ÖRNEKTE 2017 DEĞERİN 5'NCİ ELEMETTE BULDUĞU İÇİN 5 DÖNER.
//HİÇBİR DEĞER BULAMAZSA -1 SONUCUNU DÖNER.

const result = cars.findIndex (item => item.sigortaBaslangic == 2017);

console.table (result);