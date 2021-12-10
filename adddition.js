let array = [2,7,6,12,44,32,4,8,12,17]
var sum = 0
for (let i = 0; i < array.length; i+=1){
    sum += array[i]
}
console.log (sum)



let str = "2 7 6 12 44 32 4 8 12 17"
sum = 0
numbers = str.split ('')
for (let i = 0; i < str.length; i+=1){
    sum += numbers[i]
}
console.log (sum)

let str = "2 7 6 12 44 32 4 8 12 17"
str.replace('" "', ',')
for (let i = 0; i < str.length; i+=1){
    sum += str[i]
}
console.log (sum)