use user;
-- A 
select sod.*, cm.CName, pm.Description from sales_orders_details sod
inner join sales_orders so on so.OrderNo = sod.OrderNo
inner join CLIENT_MASTER cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo =  pm.ProductNo where CName = "Ivan Bayross";

-- B
SELECT sod.ProductNo, pm.Description, sod.Qtyordered, sod.Qtydisp, so.OrderDate
FROM sales_orders so
JOIN sales_orders_details sod ON so.OrderNo = sod.OrderNo
JOIN product_master pm ON sod.ProductNo = pm.ProductNo
WHERE MONTH(so.DelyDate) = MONTH(CURRENT_DATE()) AND YEAR(so.DelyDate) = YEAR(CURRENT_DATE());

-- C
select distinct pm.ProductNo, pm.DESCRIPTION from sales_orders_details sod
inner join product_master pm on pm.ProductNo = sod.ProductNo;

-- D
select sod.*, cm.CName, pm.ProductNo , pm.Description from sales_orders_details sod
inner join sales_orders so on so.OrderNo = sod.OrderNo
inner join CLIENT_MASTER cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo =  pm.ProductNo where Description = "Trousers";

-- E
SELECT so.OrderNo, cm.CName, pm.Description, sod.Qtyordered FROM sales_orders_details sod
JOIN sales_orders so ON sod.OrderNo = so.OrderNo
JOIN CLIENT_MASTER cm ON so.ClientNo = cm.ClientNo
JOIN product_master pm ON sod.ProductNo = pm.ProductNo
WHERE pm.Description = 'Pull Overs' AND sod.Qtyordered < 5;

-- F
select sod.*, cm.CName, pm.Description from sales_orders_details sod
inner join sales_orders so on so.OrderNo = sod.OrderNo
inner join CLIENT_MASTER cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo =  pm.ProductNo where cm.CName in ('Ivan Bayross','Mamta Muzumdar');   

-- G
select sod.*, cm.ClientNo,cm.CName, pm.Description from sales_orders_details sod
inner join sales_orders so on so.OrderNo = sod.OrderNo
inner join CLIENT_MASTER cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo =  pm.ProductNo where cm.ClientNo in ('C00001','C00002');



SELECT pm.ProductNo, pm.Description, sod.Qtyordered
FROM sales_order so
INNER JOIN sales_orders_details sod ON so.OrderNo = sod.OrderNo
INNER JOIN product_master pm ON sod.ProductNo = p.ProductNo
WHERE MONTH(so.DelyDate) = MONTH(CURRENT_DATE()) AND YEAR(so.DelyDate) = YEAR(CURRENT_DATE());
