var correct = Math.floor(Math.random() * 10) + 1
var attempt = 0

while (password != correct && attempt < 4)
{
  var password = prompt("Sisesta üks number 1-10-ni")
  attempt++
  if (password == correct-1 || password == correct+1) {
    alert("Sa pakkusid väga lähedale.");
  }

  if (password != correct) {
     alert(`Yeah nah yeah nah mate, ${password} ei ole õige number.`);
  } else {
     alert("Imeline, sa arvasid õige numbri ära!");
     break;
  }
   
  if(attempt == 3) {
    alert ("Sa arvasid liiga palju valesti.");
    break;
  }
}   
