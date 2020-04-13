function extrage(){
    var numere_introduse = [];
    var numere_generate= [];
    var i=8;
     var contor=0;
    while(i>0)
    {
    /* numere_generate.push(Math.random()*255);
    */
   numere_generate.push(Math.floor(Math.random() * 0x10));
      i--;
    }
    numere_introduse.push(document.getElementById("number_1").value);
    numere_introduse.push(document.getElementById("number_2").value);
    numere_introduse.push(document.getElementById("number_3").value);
    numere_introduse.push(document.getElementById("number_4").value);
    numere_introduse.push(document.getElementById("number_5").value);
    numere_introduse.push(document.getElementById("number_6").value);
    numere_introduse.push(document.getElementById("number_7").value);
    numere_introduse.push(document.getElementById("number_8").value);
   /* numere_introduse.forEach(function(numere_introduse){
      document.writeln(numere_introduse);
    })
    numere_generate.forEach(function(numere_generate){
      document.writeln(numere_generate);
    })*/
   
   
    numere_introduse.forEach(function(numere_introduse){ 
      if(numere_generate==numere_introduse)
      contor++;
  }); 
    
    document.getElementById("loto").innerHTML= "Ati introdus "+contor+" numere castigatoare!";
    

  }



