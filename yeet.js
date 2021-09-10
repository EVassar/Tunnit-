function cheackTemp(){
    let temp = Math.floor(Math.random() * 60);      //C°
    let tempcold=0
    let tempnice=21
    let temphot=41
    if (temp>temphot){
        alert ("Temperatuur on liiga kõrge, Temperatuur on " +temp +" C°")
    }
    else if (temp>tempnice  ){
        alert ("Temperatuur on paras, Temperatuur on " +temp +" C°")
    }
    else if (temp>tempcold) {
        alert ("Temperatuur on liiga madal, Temperatuur on " +temp +" C°")
    }    
    
}
