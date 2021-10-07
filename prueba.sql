delimiter $$
use prueba $$
DROP PROCEDURE IF EXISTS crud_cli $$
  CREATE PROCEDURE crud_cli (IN `act` VARCHAR(5), IN `_id` INT(10), IN `_rut` VARCHAR(10), IN `_name` VARCHAR(20), IN `_email` VARCHAR(30), IN `_fono` VARCHAR(20))
  BEGIN
  CASE act
  WHEN 'rc' THEN SELECT * FROM cli;
  WHEN 'c' THEN INSERT INTO cli(rut,name,email,fono) VALUES(_rut,_name,_email,_fono);
  WHEN 'r' THEN SELECT * FROM cli;
  WHEN 'u' THEN UPDATE cli SET rut=_rut,name=_name,email=_email,fono=_fono WHERE id=_id;
  WHEN 'd' THEN DELETE FROM cli WHERE id=_id;
  
  ELSE SELECT 0;
  END CASE;
  END $$
  
  DROP PROCEDURE IF EXISTS `crud_order`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_order` (IN `act` VARCHAR(3), IN `_ot` INT)  NO SQL
  BEGIN
  CASE act
  WHEN 1 THEN INSERT INTO prod(prod_id,name) VALUES (id,name);
  
  WHEN 'r' THEN 
  SELECT o.id,o.date,otp.name as 'type',c.name as 'cl',u.name as 'user'
  FROM order_ot o 
  INNER JOIN cli c ON o.cl = c.id
  INNER JOIN user u ON o.user = u.id
  INNER JOIN order_type otp ON o.otp = otp.id
  order by o.id limit 10;

  WHEN 'rdt' THEN 
  SELECT d.pd,p.name,p.tp,d.xyz,d.q
  FROM order_ot o 
  INNER JOIN d_ot d ON o.id = d.order
  INNER JOIN prod_st p ON d.pd = p.id
  WHERE o.id= _ot;

  WHEN 's' then SELECT i.id,i.a,i.b,i.c,s.name,p.name as 'tipo'
  FROM prod_id i
  INNER JOIN prod_st s ON i.id = s.id
  INNER JOIN prod_tp p ON s.tp = p.id where i.id=id or i.a=id or i.b=id or i.c=id order by i.id limit 20;
  
  WHEN 3 THEN UPDATE tbl SET name=name WHERE prod_id=id;
  WHEN 4 THEN DELETE FROM tbl WHERE prod_id = id;
  ELSE SELECT 0;
  END CASE;
  END$$
