var tellimus = { 
  "id": 2113, 
  "orderNumber": "E210126001", 
  "createdAt": "2021-01-26 16:04:24", 
  "clientName": "Kalle Tali", 
  "deliveryType": "Omniva smartpost", 
  "deliveryValue": 178, 
  "rows": [ 
    { 
      "article_id": 31, 
      "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
      "product_code": "257549", 
      "price": 49.1666666667, 
      "amount": 1, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23420, 
      "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
      "product_code": "355836", 
      "price": 5.0666666667, 
      "amount": 2, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23421, 
      "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
      "product_code": "000000000501267301",   
      "price": 5.825, 
      "amount": 1, 
      "vat": 0.2 
    } 
  ] 
} 
console.log (tellimus.clientName + ' ' + tellimus.orderNumber)
let o = 0
for (let i=0;i < tellimus.rows.length;i+=1){ 
  o += (tellimus.rows[i]['price']*tellimus.rows[i]['amount']);
}
/*
for (let i=0;i < entries.length;i+=1){ 
  console.log(entries[i])
  console.log(hind[1]+hind[2]+hind[3])
}

*/


/*
const entries = Object.entries(tellimus);
console.log(entries[0])
console.log(entries[1])
console.log(entries[5])
*/