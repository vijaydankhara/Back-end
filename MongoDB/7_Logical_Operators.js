/*
-----------------------------------------
==> || Logical Operators || <==
----------------------------------------- 
  1>. $And         2>. $or  
  3>. $nor         4>. $not  
-----------------------------------------
*/

// db.book.find({})

// db.book.find({$and: [{"pages" : {$eq: 384}}, {"year" : 1350}]})

// db.book.find({$or: [{"pages" : {$eq: 384}}, {"year" : {$in: [1315, 1836, 1958]}}]})

// db.book.find({$nor: [{"pages" : {$eq: 384}}, {"year" : {$in: [1315, 1836, 1958]}}]})

// db.book.find({"pages" : {$not: {$lte: 384}}})