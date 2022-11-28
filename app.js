//variabe declare
//let,const,var

//let => block scope
//var => functional scope

function sayHello()
{
    for(var i=0;i<5;i++) //var
    {
    console.log(i);
    }
    console.log(i);
}
sayHello();

function sayHellow()
{
    for(let i=0;i<5;i++) //let
    {
    console.log(i);
    }
   // console.log(i);  => undefined
}
sayHellow();

const data =25;
//data =26; //error
const person = {
    name: 'Ram', age: 25, isMarried: false 

};

console.log(person);

//higher order array method in js
let user = [
    { id:1,name:'ram',age:20},
    { id:2,name:'shyam',age:25},
    { id:3,name:'hari',age:30}
];
console.log(user);

//foreach method

for(let j=0;j<user.length;j++){
    console.log(user[j].name);
}

//using foreach
let users=user.forEach(function(user,index,allUser){
    console.log(user);
    console.log(index);
    console.log(allUser);
    //return user; //cannot return by foreach only modify
});
//console.log(users); //cannot by define

//map in js
let userData = user.map(function(user,index,allUser){
  //return user;
  return index; //can return by map
})
console.log(userData);

//filter in js -> selecting particular

let filterData=user.filter(function(data){
 return data.id == 2; //for getting data of only id=2
})
console.log(filterData);

let filterdata=user.filter(function(data){
    return data.id !== 2; //for getting data other than id=2
   })
   console.log(filterdata);

   //spread operator(...) in js

   let arr1 = [1,2,3];
   let arr2 = [...arr1,4,5,6];
   console.log(arr2);

   let person1 = {
    name:'bsal',
    age:22
   }

   let person2 = {
    ...person1,
    job: 'student'
   }
   console.log(person2);

   //destructuring in Js

   //without using
   const person3 = {
    name:'hari',
    hobbies: ['football','eating'],
    address:{
        street: 'ktm',
        city: 'ktm'
    }
   }
   console.log(person3);
   console.log(person3.hobbies);
   console.log(person3.address.street);
   console.log(person3.address.city);

   //using destructuring
   const { street , city } = person3.address;
   console.log(person3.hobbies);
   console.log(city);
   console.log(street);

   //class in js

   class Employee{
    constructor(name,experience,age){
        this.name=name;
        this.experience=experience;
        this.age=age;
    }
   }

   hari = new Employee('Hari',2,22); //hari=object
   console.log(hari);

   class Programmer extends Employee //inheritance
   {
    constructor(name,experience,age,language){
        super(name,experience,age);
        this.language=language;
    }
   }

   bsal= new Programmer('Bsal',2,20,'Java');
   console.log(bsal);
   


