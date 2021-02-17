plakaOku(plakaKontrol);

function plakaOku(ikinciIslem) {
    setTimeout(function() {
        console.log('plaka okundu');
        ikinciIslem();
    }, 1000);
    
}


function plakaKontrol() {
    setTimeout(function(){
        console.log('plaka kontrol edildi');
    }, 500);
    
}

/* function gecisSerbest() {
    setTimeout(() =>{
        console.log('Gecebilirsiniz');
    }, 1000);
}
*/


    
