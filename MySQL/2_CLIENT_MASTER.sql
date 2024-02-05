create table CLIENT_MASTER(
    ClientNo varchar(6) primary key,
    CName varchar(20) not null,
    Address1 varchar(30),
    Address2 varchar(30),
    City varchar(15),
    Pincode int,
    CState varchar(15),
    CBalDue int
);

insert into CLIENT_MASTER(ClientNo,CName,Address1,Address2,City,Pincode,CState,CBalDue) values
("C00001",'Ivan Bayross',"A/14","Worli","Mumbai",400054,"Maharashtra",15000),
("C00002",'Mamta Muzumdar',"65","Nariman","Madras",780001,"TamilNadu",0),
("C00003",'Chhaya Bankar',"p-7","Bandar","Mumbai",400057,"Maharashtra",5000),
("C00004",'Ashwini Joshi',"A/5","Juhu","Bangalore",560001,"Karnataka",0),
("C00005",'Hansel Colaco',"A/14","Worli","Mumbai",400060,"Maharashtra",2000),
("C00006",'Deepak Sharma',"A/14","Worli","Mangalore",560050,"Karnataka",0);


-- select * from CLIENT_MASTER;