// 1
// mongod
// mongosh
// use ecommerce
// show dbs

// 2
// db.customers.insertMany([
//     {
//         "customer_id": "C0001",
//         "frist_name": "Virat",
//         "last_name": "kohli",
//         "email": "virat17@gmail.com",
//         "password": "vk@1717"
//     },
//      {
//         "customer_id": "C0002",
//         "frist_name": "hardik",
//         "last_name": "pandya",
//         "email": "hp33@gmail.com",
//         "password": "hp@3333"
//     },
//      {
//         "customer_id": "C0003",
//         "frist_name": "rohit",
//         "last_name": "sharma",
//         "email": "rs45@gmail.com",
//         "password": "rohit@4545"
//     },
//     ]);

// db.products.insertMany([
//     {
//         "product_id": "P0001",
//         "product_name": "15 pro max",
//         "product_description": "12/256 GB",
//         "product_price": 169999,
//         "product_quantity": 1,
//         "category": "5G"
//     },
//     {
//         "product_id": "P0002",
//         "product_name": "14 pro max",
//         "product_description": "12/256 GB",
//         "product_price": 149999,
//         "product_quantity": 1,
//         "category": "5G"
//     },
//     {
//         "product_id": "P0003",
//         "product_name": "13 pro",
//         "product_description": "12/256 GB",
//         "product_price": 119999,
//         "product_quantity": 1,
//         "category": "5G"
//     },
//     ]);

// db.orders.insertMany([
//     {
//         "order_id": "ORD01",
//         "customer_id": "C0001",
//         "order_date": "2024-02-02",
//         "total_price":169999
//     },
//     {
//         "order_id": "ORD02",
//         "customer_id": "C0003",
//         "order_date": "2024-02-01",
//         "total_price":169999
//     },
//     {
//         "order_id": "ORD03",
//         "customer_id": "C0002",
//         "order_date": "2024-02-02",
//         "total_price":149999
//     },
//     ]);

// db.order_items.insertMany([
//     {
//       "order_items_id": "OI001",
//       "order_id": "ORD01",
//       "product_id": "P0001",
//       "quantity": 1,
//       "price": 169999
//     },
//      {
//       "order_items_id": "OI002",
//       "order_id": "ORD02",
//       "product_id": "P0002",
//       "quantity": 1,
//       "price": 149999
//     },
//      {
//       "order_items_id": "OI003",
//       "order_id": "ORD03",
//       "product_id": "P0003",
//       "quantity": 1,
//       "price": 119999
//     },
//     ]);

// 4
//   db.customers.find()

// 5
// db.products.find()

// 6
// db.orders.find()

// 7
// db.order_items.find()

////////////////////////////////////////////////////////
// 8

// db.orders.aggregate([
//     {
//         $lookup: {
//             from: "customers",
//             localField: "customer_id",
//             foreignField: "customer_id",
//             as: "customer"
//         }
//     },

//     {
//         $unwind: "$customer"
//     },

//     {
//         $lookup: {
//             from: "order_items",
//             localField: "order_id",
//             foreignField: "order_id",
//             as: "order_items"
//         }
//     },

//     {
//         $unwind: "$order_items"
//     },

//     {
//         $lookup: {
//             from: "products",
//             localField: "order_items.product_id",
//             foreignField: "product_id",
//             as: "product"
//         }
//     },

//     {
//         $unwind: "$product"
//     },

// ]);

///////////////////////////////////////////////////
// // 9
// db.products.updateOne(
//   { "product_id": "P0001" },
//   { $set: { "product_quantity": 5 } }
// )

//////////////////////////////////////////////////
// 10

// db.customers.aggregate([
//   {
//     $match: {
//       email: "virat17@gmail.com" 
//     }
//   },
//   {
//     $lookup: {
//       from: "orders",
//       localField: "customer_id",
//       foreignField: "customer_id",
//       as: "orders"
//     }
//   },
//   {
//     $unwind: "$orders"
//   },
//   {
//     $lookup: {
//       from: "order_items",
//       localField: "orders.order_id",
//       foreignField: "order_id",
//       as: "order_items"
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       customer_id: 1,
//       order_id: "$orders.order_id",
//       order_date: "$orders.order_date",
//       total_price: "$orders.total_price",
//       order_items: "$order_items"
//     }
//   }
// ])

//////////////////////////////////////////

// 11

//     db.products.aggregate([
//   {
//     $match: {category: "5G"}
//   },
//   {
//       $sort: {product_price: 1 }
//   }
// ])

// 12
// db.orders.deleteOne({ order_id: "ORD01" });
