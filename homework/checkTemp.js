/*
Katlal on kolm temperatuuri vahemiku
0-20 on liiga külm          tagastab -1
21-40 on paras temperatuur  tagastab 0
41-60 on liiga kuum         tagastab 1
GitHubi: homework/check temp
*/
function checkTemp(){
    let temp = Math.floor(Math.random() * 60);      //C°
    let tempcold = 0
    let tempnice = 20.9
    let temphot = 40.9
    if (temp > temphot){
        alert ("Temperatuur on liiga kõrge, Temperatuur on " +temp +" C°")
        return 1;
    }
    else if (temp>tempnice){
        alert ("Temperatuur on paras, Temperatuur on " +temp +" C°")
        return 0;
    }
    else {
        alert ("Temperatuur on liiga madal, Temperatuur on " +temp +" C°")
        return -1;
    }    
}