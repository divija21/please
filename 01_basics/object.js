const mykey = Symbol("newkey");
const jsuser={
    name:"Hitesh",
    fullname:"Hitesh choudhary",
    age:18,
    [mykey]:"used",
    location:"Jaipur",
    loggegin:false,
    lastlogindays:["monday","tuesday"]
}
jsuser.greetings =function(){
    console.log("hello js users");
}
jsuser.greetings2=function(){
    console.log(`the name of user is ${this.name}`);
}
// console.log(jsuser.name);
// console.log(jsuser["age"]);
// console.log(jsuser["fullname"]);
// // if we want to declare the symbol used as a key in a program 
// console.log(typeof(jsuser[mykey]))
// console.log((jsuser[mykey]));
console.log(jsuser.greetings());
console.log(jsuser.greetings2());


