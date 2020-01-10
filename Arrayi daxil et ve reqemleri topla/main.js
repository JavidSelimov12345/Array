"use strict";

let number=[];
let arrayLegth = +prompt("arrayin uzunlugunu daxil edin");
let sumofAll=0;
let sumofEvens=0;
for (let i=0;i<arrayLegth;i++){

    let n= +prompt(i+1+"ci reqemi daxil edin");
    number.push(n);

};

for (let i=0;i<number.length;i++){

    sumofAll+= number[i];
    if(number[i] %2 == 0){
        sumofEvens+=number[i];
    }
    
    
};

alert("cut reqemlerin cemi"+" "+sumofEvens);
alert("teklerin cemi "+ (sumofAll-sumofEvens));

