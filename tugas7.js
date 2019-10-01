var tinggiBadan=[175,160,155,165,172,180,169,156,145,176];


 // menggunakan for perulangan biasa
var counter=1;
for(var i=0;i<tinggiBadan.length;i++){

  console.log("list tinggi badan ke "+counter+ " adalah: "+ tinggiBadan[i]);
  counter++;
}

//menggunakan perulangan for of

for(let x of tinggiBadan){
 console.log(x);
}


//analisis perbedaanya, kalo secara penulisan lebih singkat menggunakan for of ,
