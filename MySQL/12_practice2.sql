\sql
\connect root@localhost:3306
create database employments;
use employments;
show databases;
-- create table employee;
show tables;

create table employee(
    employeeId varchar(5),
    employeeFristName varchar(10),
    employeeLastName varchar(10),
    Height varchar(10),
    weight varchar(10),
    city varchar(10),
    mobileNumber int
);


 insert into employee(employeeId,employeeFristName,employeeLastName,Height,weight,city,mobileNumber)values
("EM001","Vijay","Dankhara","178 Cm","83 Kg","Surat",886611121),
("EM002","jenil","Kakadiya","171 Cm","85 Kg","Surat",987456238),
("EM003","Krish","Ranghani","156 Cm","60 Kg","Amreli",999985235),
("EM004","Dhaval","Chauhan","175 Cm","73 Kg","Bhavnagar",856332244),
("EM005","Vijay","Solanki","169 Cm","77 Kg","Surat",802244559),
("EM006","Monica","patel","160 Cm","62 Kg","Amreli",899061181),
("EM007","Shrushti","patel","168 Cm","62 Kg","Amreli",999812456),
("EM008","Priya","patel","160 Cm","65 Kg","Gariyadhar",909035577),
("EM009","Yesha","Mavani","170 Cm","73 Kg","Ahemdabad",962412314),
("EM010","Krishna","Gajera","171 Cm","63 Kg","Ahemdabad",973733232);

Select * from  employee  Order by employeeFristName desc;
select * from employee where weight  >=  "70 Kg";
select * from employee where Height  <= "170 Cm";
select * from employee where city = "Amreli";
select * from employee where city != "surat";
select * from employee where employeeId = "EM006";
select employeeFristName, max(weight) from employee group by employeeFristName;
select * from employee where Height between "165 Cm" and "175 Cm";
select * from employee where employeeId between "EM003" and "EM008";
Select * from  employee  Order by mobileNumber asc;
Select * from  employee  Order by city desc , mobileNumber asc;
Select * from  employee  where employeeLastName like "p%";
Select * from  employee  where employeeFristName like "%a";
Select * from  employee  where employeeFristName like "%a%";
delete from employee where employeeId = "EM008";