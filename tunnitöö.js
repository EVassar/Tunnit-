Rahakott = Math.random()*50  //$ randomiseerib, kui palju raha kliendil onn
tooteHind = 25               // kui palju toode maksab
raharv = (Rahakott-tooteHind)
if (Rahakott > tooteHind){   //võrdleb kui palju rahakottis raha on tootehinnaga
    console.log("sul on piisavalt raha, kas sa soovid seda osta?")
    confirmAction = confirm ("Kas sa soovid seda osta") 
    if(confirmAction==false) 
    console.log("Sa ostsid selle")
    console.log(Rahakott-tooteHind)    
}
if (tooteHind > Rahakott){
    console.log("Sa ei saa seda osta seda, sul on puudu")
    console.log(Rahakott-tooteHind)
}