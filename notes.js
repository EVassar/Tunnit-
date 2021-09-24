let summa = function (){
    
}


typeof summa        //näitab mis sorti info on muutuja sees.
typeof gkjksfdjgksj        //kui pole defineeritud siis see tähendab undefined

//  primitive types:
//  Number string boolean object function undefined null
//  user defined types:
//  Math

//object näide, object laseb sul kaks asja defineerida ühe all. Object on tüüp mis salvesta key-value paare.
//key: value,
//let töötaja = {nimi: "Timo", palk: 10,}                         //töötav object
let töötaja = {                                                  
  nimi: "Timo",
  palk: 10,
  rahakott: 0,
  maksapalka: function(){
    rahakott += palk
  }
}
let töötaja2 = {                                                  
    nimi: "3",
    palk: 10,
    rahakott: 5,
    maksapalka: function() {
      this.rahakott += this.palk
    }
}
let töötaja3 = {                                                  
    nimi: "4o",
    palk: 2,
    rahakott: 18,
    maksapalka: function(){
      rahakott += palk
    }
    muuda.
}
töötaja2.muuda += 5
töötaja2["palk"] += 5
töötaja2.maksapalka()

/*
//array[]
//object{}
*/

let tahaTeada= prompt("Mis kuu kohta tahad teada");
let kuu = ['','Jaanuar','Veebraur','Märts','April','Mai','Juuni','Juuli','August','September','Oktoober','November','Detsember']
let et = [0,10,52,31,26,12,24];
alert(kuu[tahaTeada] +" Kuus läks " +et[tahaTeada-1] +" KW");


for (let i = 0; i <= 69; i++) console.log(i)
    
work =(x < 100)
while(work){
  console.log(x);
  if (new date().getMinutes() >= 30)
    work = false;
}
/*
const kuu = []
kuu[1]="Jaanuar";
kuu[2]="Veebraur"
kuu[3]="Märts"
kuu[4]="April";
kuu[5]="Mai"
kuu[6]="Juuni"
kuu[7]="Juuli";
kuu[8]="August"
kuu[9]="September"
kuu[10]="Oktoober";
kuu[11]="November"
kuu[12]="Detsember"
*/




//CRUD
//Create
Read
Update
Delete
Array CRUD
Create
['test',2,3,null]
console.log([])
let list = ['test',2,3,null]
let fruits = ['orange','banana','apple']
//Read
list[0] // 'test'
list[1] // '2'
list[2] // '3'
list[3] // 'null'
list[4] // 'undefined'
list.filter(elem => elem > ) // 2,3
fruits.indexOf("pear")//-1
fruits.includes('pear')//false
// indexOf tagastab kus positsioonil element arrays on
// -1 on et ei ole arrays
