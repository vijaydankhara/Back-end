1
create database cricket;
use cricket;

2
create table Cricketer(
    CricketerId int(5),
    FullName varchar(25),
    email varchar(25),
    department varchar(25),
    salary int(10),
    team varchar(5),
    Country varchar(20)
);


3
insert into Cricketer(CricketerId,FullName,email,department,salary,team,Country)values
(00001,"virat kohli","virat17.test","Batsman",17500,"RCB","India"),
(00002,"Rachin Ravindra","rachin18.test","AllRounder",1500,"CSK","New Zealand"),
(00003,"David Warner","david57.in","Opening Batsman",12500,"DC","Australia"),
(00004,"David Miller","dmiller76.test","Batsman",1100,"GT","South Africa"),
(00005,"Andre Russell","ar333.in","AllRounder",75000,"KKR","West Indies"),
(00006,"Hardik Pandya","Hardikp33.test","AllRounder",1000,"MI","India"),
(00007,"Naveen Ul Haq","Naveen89.test","Bolwer",5500,"LSG","Afghanistan"),
(00008,"Wahindu Hasaranga","wahindu35.in","AllRounder",9000,"SH","Sri Lanka"),
(00009,"Rohit Sharma","rohit45.test","Opening Batsman",16000,"MI","India"),
(00010,"Krunal Pandya","kp23.in","AllRounder",19900,"LSG","India");


4
select * from Cricketer;


5
update Cricketer set salary = 22500;

6
delete from Cricketer where  CricketerId = 00007;

7
Select * from  Cricketer  Order by salary desc;

8
select * from Cricketer where salary  >= 5000;

9
Select * from  Cricketer  Order by Country desc;

10
delete from Cricketer where  FullName = "Naveen Ul Haq";

11
Select * from  Cricketer  Order by FullName asc;

12
select * from Cricketer where salary  <= 25000;

