// for in loop and for of loop

// let person = {
//     name: "Hardik Pandya",
//     team: "Mumbai",
//     postion: "Captan",
//     Salary: "17.50CR",
//     age: 28,
//     email: "Hardik@33.in"
// };

// let txt = "";
// for(let i in person){
//     txt += person[i] + "\n";
// }

// console.log(txt);




////////////////////////////////////




// let person = [11,22,33,44,55];

// let txt = "";

// for(let i of person){
//     txt += i + "\t";
// }
// console.log(txt);



//////////////////////////////////////////////////////

// ... rest parameter / spread operator

let person = {
    name: "Hardik Pandya",
    team: "Mumbai",
    postion: "Captan", 
    age: 28,
    email: "Hardik@33.in"
};
  
  let data = person;
//   let data = { ...person };
  
  person.salary = 17.50;
  
  person.playing = ["Mumbai Indian","Gujarat Titan"]
  data.hobbies = ["Playing"];
  console.log(person);
  console.log(data);