-- select name, city from client_master;
-- select *, city from client_master;
-- select name as "Full Name" from client_master;
-- select name as "Full Name", city "District" from client_master;


-- -- Where clause
-- select * from client_master where city = 'mumbai';
-- select * from client_master where baldue < 5000;
-- select * from client_master where baldue >= 5000;
-- select * from client_master where baldue = 5000;



-- -- order by
-- select * from client_master order by city desc, baldue asc;
-- select * from client_master order by city desc;



-- -- update query
-- update client_master set baldue = 1000 // all record update
-- update client_master set baldue = 1000, city = 'Navi Mumbai' where baldue = 0;


-- -- delete query
-- delete from client_master;
-- delete from client_master where address1 = '66';

--  -- drop statement 
-- drop table client_master;
-- drop database node_8am;


-- -- Types Of Joins
-- -- Inner Join
-- Select column From table1  Inner join table2 On table1.column = table2.column;

-- -- Left Join
-- Select column From table1 Left join table2 On table1.column = table2.column;

-- --  Right Join 
-- Select column From table1 Right join table2 On table1.column = table2.column;

-- -- Full Join
-- Select column From table1 FUll join table2 On table1.column = table2.column;

-- -- Cross Join
-- Select column From table1 cross join table2;



-- -- Like Operators
-- -- Select * from  table_name  where column like pattern;
-- ->  a%     Start with ‘a’ 
-- ->  %a     End with ‘a’
-- ->  _a%    Second character ‘a’
-- ->  %a_    Second last character ‘a’ 
-- ->  %a%    Word in character ‘a’ any position
-- ->  _a__   Length specific character
-- ->  a%o    Start with ‘a’ and End with ‘o’


