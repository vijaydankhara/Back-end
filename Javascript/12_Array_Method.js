/* 
===================================> || Array methodes || <===========================================

1.> lenth()       7.> splice()          13.> Array Max()    19.> reduseRight()      25.> includes()   
2.> push()        8.> slice()           14.> Array Min()    20.> every()            26.> copyWithin() 
3.> pop()         9.> sort()            15.> forEach()      21.> some()
4.> unShift()    10.> Reverce  ()       16.> map()          22.> find()
5.> Shift()      11.> changing ()       17.> filter()       23.> findIndex()
6.> Merging()    12.> Numeric Sort:-()  18.> reduse()       24.> entries ()
*/


// 1.> lenth of array
// const a=[11,22,33,44,55,66,77,88,99];
// console.log("Lenth of Array is :- ",a);
// /////////////////////////////////////////

// 2.> array push    ==> add element of last position
// const a = [11,22,33,44,55];
// a.push(111,222);
// console.log(a);
////////////////////////

// 3.> array pop   ==> delet element of last position
// const a = [11,22,33,44,55];
// a.pop();
// console.log(a);
//////////////////////////////////////////////////////

// 4.> Array unShift:-       ==> add element of frist position
// const a = [11,22,33,44,55];
// a.unshift(111,222);
// console.log(a);
//////////////////////////////////////////////////

// 5.> Array Shift:-  ==> delet element of frist position
// const a = [11,22,33,44,55];
// a.shift();
// console.log(a);
/////////////////////////////////////////////////////

// 6.>  Array Merging(Concatenating):-   ==>  murge array
// const bat = ['Gill','Rohit','kohli','Surya','Rinku','KL Rahul'];
// const bow = ['Hardik','Jadeja','Kuldeep','Siraj','Shami'];
// const all = bat.concat(bow);
// console.log(all);
//////////////////////////////////////////////////////

// 7.>  Array splice   ==>add element of any position in array
// const bat = ['Gill','Rohit','kohli','Surya','Rinku','KL Rahul'];
// bat.splice(3,0,"MS Dhoni","Hardik");
// console.log(bat);
////////////////////////////////////////////////////////////

// 8.>  Array slice   ==> Delete element of any position in array
// const bat = ['Gill','Rohit','kohli','Surya','Rinku','KL Rahul'];
// const team = bat.slice(1,3);
// console.log(bat);
// console.log(team);
/////////////////////////////////////////////////////////////

// 9.> Array sort  ==> shorting Element
// const alfa = ['c','d','e','a','b'];
// alfa.sort();
// console.log(alfa);
/////////////////////////////////////////////

// 10.> Array Reverce  ==> shorting Element
// const alfa = ['c','d','e','a','b'];
// alfa.sort();
// console.log(alfa.reverse());

/////////////////////////////////////////////////////////////////

// 11.> Array Changing



////////////////////////////////////////////////////////////////////////

// 12.> Numeric Sort:-
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points);

////////////////////////////////////////////////////////////////////

// let data = [11,22,33,44,55,66,77,88,99];

// 13.>  Array Max ():-  ==> finde the array in Highet(Big)Number.
// MaxNum = (a) =>{
// return Math.max.apply(null,a);
// };
// console.log(MaxNum(data))

/////////////////////////////////////////////////////////////

// 14.>  Array Min ():-  ==> finde the array in lowest (Small) Number.
// MinNum = (a) =>{
// return Math.min.apply(null,a)
// };
// console.log(MinNum(data))

//////////////////////////////////////////////////////////

// 15.> Array forEach ():- ==> 
// let a = "";
// data.forEach((val, index)=>{
// a = a +" " + val;
// })
// console.log(a);

///////////////////////////////////////////////////////////////

// 16.> Array Map ():-  
// let a = [];
// a = data.map((val, index)=>{
// return val - 5
// })
// console.log(a);

//////////////////////////////////////////////////////////////////

// 17.> Array filter ():-
// let a = [];
//  a = data.filter((val, index)=>{ 
// return val < 33;
// })
// console.log(a);

////////////////////////////////////////////////////
// 18.> Array reduse ():-
// let abc;
// abc = data.reduceRight((a,val, index)=>{
// return a + val;
//  })
// console.log(abc);

////////////////////////////////////////////////////////////////////////////////

// 19.>  Array reduseRight ():-

/////////////////////////////////////////////////////////

// 20.> Array every():-
//  let abc;
//  abc = data.every((val, index)=>{
//  return val >= 25
// })
// console.log(abc);

///////////////////////////////////////////////////////////////

// 21.>  Array some():-
//  let abc;
//  abc = data.some((val, index)=>{
//  return val < 25
// })
// console.log(abc);

/////////////////////////////////////////////////////////////////

// 22.> Array find():-
//  let abc;
//  abc = data.find((val, index)=>{
//  return val >= 25
// })
// console.log(abc);

//////////////////////////////////////////////////

// 23.> Array findIndex():-
// let abc;
//  abc = data.findIndex((val, index)=>{
//  return val >= 25
// })
// console.log(abc);

//////////////////////////////////////////////////////////////

// 24.>  Array entries():-
// let abc;
//  abc = data.entries();
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);

/////////////////////////////////////////////////////////////////////

// 25.>  Array includes():-
// let abc;
// abc = data.includes(11); // is true
// console.log(abc);

////////////////////////////////////////////////////////////////////

// 26.>  Array copyWithin():-
// console.log(data.copyWithin(0,4,7));
// console.log(data.copyWithin(1,5));
//////////////////////////////////////////////////