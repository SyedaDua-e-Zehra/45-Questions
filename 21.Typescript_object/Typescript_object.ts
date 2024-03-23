//Write a program that creates Objects containing these items.

interface person {
    age : number ,
    name : string ,
    nationality : string,
    Student : Boolean,
}
let person :person = {
    age : 34 ,
    name : 'Ahsan',
    nationality : 'Pakistan' ,
    Student : true ,
}
console.log(person);
//object car
interface car {
    maker : string,
    color : string,
    automatic : boolean,
}
let car = {
    maker : 'ferari',
    color : 'Black',
    automatic :true 
}
console.log(car);