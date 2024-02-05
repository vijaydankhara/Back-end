use user;
select so.*, cm.CName from sales_orders so, CLIENT_MASTER cm where so.ClientNo = cm.ClientNo;

select so.*, cm.CName from sales_orders so inner join CLIENT_MASTER cm on so.ClientNo = cm.ClientNo;

select so.*, cm.CName from sales_orders so left join CLIENT_MASTER cm on so.ClientNo = cm.ClientNo;

select so.*, cm.CName, cm.city from sales_orders so right join CLIENT_MASTER cm on so.ClientNo = cm.ClientNo order by cm.city desc;


select sod.*, cm.CName, pm.DESCRIPTION from sales_orders_details sod 
inner join  product_master pm on pm.ProductNo =sod.ProductNo
inner join sales_orders so on so.orderNo = sod.orderNo
inner join CLIENT_MASTER cm on so.ClientNo = cm.ClientNo;