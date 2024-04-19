const thuder={}
thuder.id="12345"
thuder.name="hitesh"
thuder.isloggedin="true"
console.log(thuder);
// if we have to make nested objects
const regularuser={
    email:"hitesh@googl.com",
    fullname:{
        username:{
first:"hitsh",
last:"choudhary"
        }
    }
}
console.log(regularuser.fullname.username.first);
// c
const obj1={1:"a",2:"b",3:"c"}
const obj2={1:"g",3:"g",7:"h"};
//const obj3=Object.assign({},obj1,obj2);
// we can also do this like
const obj3= {...obj1,...obj2}
console.log(obj3);