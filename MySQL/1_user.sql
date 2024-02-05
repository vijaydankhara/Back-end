--   \sql

-- \connect root@localhost:3306

--  use user

-- create databases databases_Name;

-- password

-- y/n

-- show databases;
-- show tables;

create table test(
   id int,
   FirstName varchar (20),
   LastName varchar (30),
   Gender varchar(20),
   Email varchar(20),
   MobileNo double
);

insert into test(id,FirstName,LastName,Gender,Email,MobileNo) values (1,'Vijay','Dankhara','Male','vijay@1234.in',9876543210);


insert into test(id,FirstName,LastName,Gender,Email,MobileNo) values 
(2,'Bhautik','Patel','Male','bhautik@24.in',9797543210),
(3,'Krish','Rangani','Male','krish@11.in',9552255210),
(4,'Priya','Radadiya','Female','priya@yahoo.com',9624323232),
(5,'Yesha','Patel','Female','yeshal1@gmail.com',8866111111);


insert into test values (6,'Hardik','Patel','Male','hpatel@33.in',8980202033);

-- skip some colume data 


insert into test(id,FirstName,LastName,Gender,MobailNo) values 
(7,'Neha','Patel','Female',6353343210),
(8,'Trupti','Sojitra','Male',8889546790);


insert into test values 
(9,'Rahul','Dravid','Male',957788900);


-- select * from test;



