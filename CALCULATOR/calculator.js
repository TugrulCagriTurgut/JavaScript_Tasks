function calculator(numb1,numb2,signe){
    if(signe =='+'){
      let resullt ={
          result:numb1+numb2
    }
    return resullt;
}
else if(signe == '-'){
    let resullt = {
        result: numb1-numb2
    }
    return resullt;
}
else if(signe == '*'){
    let resullt={
        result: numb1*numb2
    }
    return resullt;
}
else if ( signe== '/'){
    if(numb2==0) console.log('indefinite result');
    else{
        let resullt = {
            result: numb1/numb2
        }
        return resullt;
    }
}
else console.log('nothing');
}
let islem=calculator(5,0,'p');
console.log(islem);