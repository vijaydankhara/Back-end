/*
-----------------------------------------
==> || Comparison Operators || <==
----------------------------------------- 
1>.  $eq      5>. $lt
2>.  $ne      6>. $lte
3>.  $gt      7>. $in
4>.  $gte     8>. $nin
------------------------------------------
*/
// db.book.find({"pages":{$eq : 320}})

// db.book.find({"pages":{$ne : 320}})

// db.book.find({"pages":{$gt : 320}})

// db.book.find({"pages":{$gte : 520}})

// db.book.find({"pages":{$lt : 505}})

// db.book.find({"pages":{$lte : 505}})

// db.book.find({"pages":{$in :[ 320,505]}})

// db.book.find({"pages":{$nin :[ 320,505]}})

// db.book.find({"language":{$in :["English"]}})

// db.book.find({"country":{$nin :["United Kingdom"]}})

// db.book.find({"language":{$in :["Italian"]}})

// db.book.find({"country":{$nin :["United Kingdom","France","Argentina"]}})

// db.book.find({"year":{$ne : 1315}})

// db.book.find({"year":{$gte : 1958}})
