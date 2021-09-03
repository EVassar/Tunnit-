Rahakott = Math.random()*50  //$ randomiseerib, kui palju raha kliendil onn
tooteHind = 25               // kui palju toode maksab
rahaarv = (Rahakott-tooteHind)
if (Rahakott<tooteHind){
    alert("Sa ei saa seda osta, sul jäi puudu " +rahaarv)
}
if (Rahakott>tooteHind){ 
    confirmAction = confirm ("Kas sa soovid seda osta");

    if (confirmAction==false){
        alert ("Sa ei ostnud seda, sul on " +Rahakott +" eurot üle");     
    }
     else 
         alert ("Sa ostsid selle sul on üle " +rahaarv +" eurot järel"); 
    
}