// use vijay
// show dbs
// show collections
// db.createCollection("user");

// db.Client_master.find()



// update a collection

// db.student.updateone()  // delete 1 time data
// db.student.updateone({name: "srushti"},{$set: {age: 20,hobbies: ["Traweling","Dansing"]}}, {upsert:true})

// db.student.updatemany()  // delete multipal time data
// db.student.updatemany({},{$set: {course: "Backend Devlopment"}},{upsert: true})


// delete a collection

// db.students.deleteone()    // only one document delete
// db.students.deleteone({name: "srushti"})

// db.students.deletemany()    // Many document delete
// db.students.deletemany({}) 


// drop a collection

// db.collection.drop();   // drop collection  (table)
// db.student.drop();

// db.drop database();    // delete a databases 
// db.drop vijay();



// MongoDB Update Operators

// // fields 
// $currentdata
// $inc
// $rename
// $set
// $unset


// array
// $addtoset
// $pop
// $pull
// $push


// 


//  mongoimport --db vijay --collection book --file books.json --jsonArray