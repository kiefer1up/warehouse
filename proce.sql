delimiter $$
use prueba $$
-- Procedures
-- cli
  DROP PROCEDURE IF EXISTS `crud_cli`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_cli` (IN `act` VARCHAR(5), IN `_id` INT(10), IN `_rut` VARCHAR(10), IN `_name` VARCHAR(20), IN `_email` VARCHAR(30), IN `_fono` VARCHAR(20))  NO SQL
  BEGIN
  CASE act
  WHEN 'rc' THEN SELECT * FROM cli;
  WHEN 'c' THEN INSERT INTO cli(rut,name,email,fono) VALUES(_rut,_name,_email,_fono);
  WHEN 'r' THEN SELECT * FROM cli;
  WHEN 'u' THEN UPDATE cli SET rut=_rut,name=_name,email=_email,fono=_fono WHERE id=_id;
  WHEN 'd' THEN DELETE FROM cli WHERE id=_id;
  
  ELSE SELECT 0;
  END CASE;
  END$$
-- order
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
-- prod
  DROP PROCEDURE IF EXISTS `crud_prod`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_prod` (IN `act` VARCHAR(1), IN `id` INT, IN `cod` VARCHAR(30), IN `name` VARCHAR(70), IN `tp` TINYINT(2))  NO SQL
  BEGIN
  CASE act
  WHEN 1 THEN INSERT INTO prod(prod_id,name) VALUES (id,name);
  
  WHEN 'r' THEN
  SELECT i.id,i.a,i.b,s.name,p.name as 'tipo'
  FROM prod_id i 
  INNER JOIN prod_st s ON i.id = s.id
  INNER JOIN prod_tp p ON s.tp = p.id order by i.id;
  
  WHEN 's' then SELECT i.id,i.a,i.b,s.name,p.name as 'tipo'
  FROM prod_id i
  INNER JOIN prod_st s ON i.id = s.id
  INNER JOIN prod_tp p ON s.tp = p.id where i.id=id or i.a=cod or i.b=cod or i.c=cod order by i.id limit 20;
  
  WHEN 3 THEN UPDATE tbl SET name=name WHERE prod_id=id;
  WHEN 4 THEN DELETE FROM tbl WHERE prod_id = id;
  ELSE SELECT 0;
  END CASE;
  END$$

  DROP PROCEDURE IF EXISTS `crud_prod_tp`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_prod_tp` (IN `act` VARCHAR(5), IN `_id` INT(10), `_name` VARCHAR(20))  NO SQL
  BEGIN
  CASE act
  WHEN 'c' THEN insert into prod_tp(id,name) values(_id,_name);
  WHEN 'r' THEN SELECT id,name FROM prod_tp;
  WHEN 'u' THEN update prod_tp SET name=_name where id=_id;
  WHEN 'd' THEN Delete FROM prod_tp where id=_id;
  ELSE SELECT 0;
  END CASE;
  END$$

  DROP PROCEDURE IF EXISTS `crud_prov`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_prov` (IN `act` VARCHAR(5), IN `cod` INT, IN `id` INT, IN `name` VARCHAR(30), IN `email` VARCHAR(30), IN `fono` VARCHAR(20))  NO SQL
  BEGIN
  CASE act
  WHEN 'rp' THEN 
  
  SELECT * FROM prov order by name limit 20;
  ELSE SELECT 0;
  END CASE;
  END$$
-- stock
  DROP PROCEDURE IF EXISTS `crud_stock`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_stock` (IN `act` VARCHAR(6), IN `id` VARCHAR(70), IN `name` VARCHAR(20), IN `q` SMALLINT(3), IN `xyz` VARCHAR(3), IN `tk` VARCHAR(10))  NO SQL
  BEGIN
  CASE act
  WHEN 1 THEN INSERT INTO tbl(prod_id,xyz,q) VALUES (id,xyz,q);
  
  WHEN 'r' THEN SELECT s.id,t.name,tp.name as cp,s.q,s.xyz
  FROM stock s 
  INNER JOIN prod_st t on s.id = t.id
  INNER JOIN prod_tp tp on t.tp = tp.id
  order by s.xyz;
  
  WHEN 'sp' THEN SELECT s.id,i.a,i.b,i.c,t.name,tp.name as cp,s.q,s.xyz
  FROM stock s
  inner JOIN prod_id i on s.id = i.id
  INNER JOIN prod_st t on s.id = t.id
  INNER JOIN prod_tp tp on t.tp = tp.id
  where i.a=id or i.b=id or i.c=id order by s.xyz;
  
  WHEN 'sx' THEN SELECT s.id,i.a,i.b,i.c,t.name,tp.name as cp,s.q,s.xyz
  FROM stock s
  inner JOIN prod_id i on s.id = i.id
  INNER JOIN prod_st t on s.id = t.id
  INNER JOIN prod_tp tp on t.tp = tp.id
  where s.xyz=xyz order by s.xyz;
  
  WHEN 'sq' THEN SELECT s.id,i.a,i.b,i.c,t.name,tp.name as cp,s.q,s.xyz
  FROM stock s
  inner JOIN prod_id i on s.id = i.id
  INNER JOIN prod_st t on s.id = t.id
  INNER JOIN prod_tp tp on t.tp = tp.id
  where s.q=q order by s.xyz;
  
  #select
  WHEN 'rsxyz' THEN SELECT xyz FROM stock GROUP BY xyz order	By	xyz;
  WHEN 'rxyz' THEN SELECT s.xyz FROM stock s GROUP BY s.xyz order	By	s.xyz;
  
  WHEN 'rxyzid' THEN SELECT s.id,i.a,st.name,s.xyz,tp.name as cp,s.q FROM stock s 
  INNER JOIN prod_id i ON s.id=i.id
  INNER JOIN prod_st st ON s.id=st.id
  INNER JOIN prod_tp tp ON st.tp=tp.id
  WHERE s.xyz= xyz;

  
  WHEN 'ridxyz' THEN SELECT s.xyz FROM stock s 
  INNER JOIN prod_id i ON s.id=i.id
  INNER JOIN prod_st st ON s.id=st.id
  INNER JOIN prod_tp tp ON st.tp=tp.id
  WHERE s.id= id GROUP BY s.xyz;
  
  
  
  WHEN 4 THEN DELETE FROM tbl WHERE `xyz` = xyz;
  ELSE SELECT 0;
  END CASE;
  END$$
-- tmp d ot
  DROP PROCEDURE IF EXISTS `crud_tmp_d_ot`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_tmp_d_ot` (IN `act` VARCHAR(6), IN `_id` INT, IN `_pd` VARCHAR(10), IN `_q` SMALLINT, IN `_xyz` VARCHAR(3), IN `_tk` VARCHAR(50), IN `_otp` TINYINT(1))  NO SQL
  BEGIN
  DECLARE COD_ int;
  CASE act
  #READ
  WHEN 'r' THEN 
  SELECT t.id, i.a as cod, p.name,tp.name AS cP,t.xyz,t.q 
  FROM d_ot_temporal t
  INNER JOIN prod_id i ON t.pd = i.id
  INNER JOIN prod_st p ON p.id = i.id
  INNER JOIN prod_tp tp ON p.tp = tp.id
  WHERE t.otp=_otp;
  
  #SEARCH
  WHEN 's' THEN 
  SELECT t.id, i.id, p.name, tmp.xyz, t.q, t.otp, t.tk 
  FROM d_ot_temporal t
  INNER JOIN prod p ON tmp.prod_id = p.prod_id;
  #CREATE
  WHEN 'c' THEN
  SET COD_ = (SELECT id FROM prod_id WHERE a=_pd or b=_pd or c=_pd);
  INSERT INTO d_ot_temporal(pd,xyz,q,otp,tk) VALUES(COD_,_xyz,_q,_otp,_tk);
  
  WHEN 'cxyz' THEN
  INSERT d_ot_temporal(pd,xyz,q,otp,tk) SELECT s.id,s.xyz,s.q,_otp,_tk FROM stock s WHERE s.xyz= _xyz;

  WHEN 'u' THEN UPDATE d_ot_temporal SET pd=_pd,xyz=_xyz,q=_q,otp=_otp,tk=_tk WHERE id=_id;

  #DELETE
  WHEN 'd' THEN
  DELETE FROM d_ot_temporal t WHERE t.id= _id;
  
  WHEN 'dxyz' THEN
  DELETE FROM d_ot_temporal t WHERE t.xyz= _xyz;
  
  ELSE SELECT 0;
  END CASE;
  END$$
-- user
  DROP PROCEDURE IF EXISTS `crud_user`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_user` (IN `act` VARCHAR(1), IN `cod` VARCHAR(10), IN `id` VARCHAR(10), IN `name` VARCHAR(30), IN `pass` VARCHAR(100), IN `rol` VARCHAR(1), IN `cont` VARCHAR(10))  NO SQL
  BEGIN
  CASE act
  WHEN 1 THEN INSERT INTO tbl (cli_id,name,contacto) VALUES (id,name,cont);
  WHEN 'r' THEN SELECT * FROM user;
  WHEN 3 THEN UPDATE tbl SET cli_id=id;
  WHEN 4 THEN DELETE FROM tbl WHERE cli_id = id;
  ELSE SELECT 0;
  END CASE;
  END$$
-- xyz
  DROP PROCEDURE IF EXISTS `crud_xyz`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_xyz` (IN `act` VARCHAR(5), IN `id` INT, IN `name` VARCHAR(3))  NO SQL
  BEGIN
  CASE act
  
  #select
  WHEN 'rxyz' THEN SELECT * FROM xyz order By	id;
  ELSE SELECT 0;
  END CASE;
  END$$
-- order
  DROP PROCEDURE IF EXISTS `proc_order`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_order` (IN `_cl` VARCHAR(10), IN `_otp` TINYINT(1), IN `_tk` VARCHAR(10))  BEGIN
    DECLARE order_ot mediumint(9);
    DECLARE registro int;
      declare _otp_ tinyint;
      
      DECLARE nw_exist smallint;
    DECLARE ac_exist smallint;
    DECLARE tmp_pd	int;
    DECLARE tmp_q	smallint;
      DECLARE tmp_xyz	varchar (3);
  
    DECLARE a	int;
    SET	a = 1;    
  #tablatemporal
  DROP table IF EXISTS `tbl_tmp_tokenUser`;
    CREATE TABLE tbl_tmp_tokenUser(
      id int NOT null	AUTO_INCREMENT PRIMARY KEY,
          pd int, 
      q smallint(6),
      xyz varchar (3),
          otp tinyint(1));
  
    SET registro =(SELECT COUNT(*) FROM d_ot_temporal WHERE tk = _tk and otp=_otp);
  IF registro > 0 THEN

  #inserta en tmptoken
    INSERT INTO tbl_tmp_tokenUser(pd,q,xyz,otp) SELECT pd,q,xyz,otp FROM d_ot_temporal WHERE tk = _tk and otp = _otp;
  #insert en order ot
      INSERT INTO order_ot(user,cl,otp) VALUES(_tk,_cl,_otp);
  #setea al ultimo ot
    SET order_ot = LAST_INSERT_ID();
  #insert en detalle
    INSERT d_ot(order_id,pd,q,xyz) SELECT (order_ot) as noto,pd,q,xyz FROM d_ot_temporal WHERE tk = _tk;
  #------------
  #------------
  #bucle cant registro
  WHILE a <= registro DO
      #linea a ingresar
    SELECT otp INTO _otp_ FROM tbl_tmp_tokenUser WHERE id = a;
    SELECT pd,q,xyz INTO tmp_pd, tmp_q,tmp_xyz FROM tbl_tmp_tokenUser WHERE id = a;
    if(select 1=1 from stock where id= tmp_pd AND xyz = tmp_xyz) then
      begin
    #existencia actual
      SELECT q INTO ac_exist FROM stock WHERE id = tmp_pd AND xyz = tmp_xyz;
      end;
    else
    begin
      set ac_exist = 0;
    end;
  end if;
  #switch
  case _otp_
  WHEN 1 then
    SET nw_exist = ac_exist + tmp_q;
  WHEN 2 then
    SET nw_exist = ac_exist - tmp_q;
  WHEN 3 then
    SET nw_exist = tmp_q;
  WHEN 4 then
    SET nw_exist = ac_exist + tmp_q;
   ELSE select 0;
  END CASE;
  if ac_exist> 0 then 
  UPDATE stock SET q = nw_exist WHERE id = tmp_pd AND xyz = tmp_xyz;
  else
  insert into stock(id,xyz,q) VALUES (tmp_pd,tmp_xyz,nw_exist);
  end if;
  SET a=a+1;
  #elina stock 0
  delete from stock where q = 0;
  END WHILE;
  #------------------
  #------------------
  DELETE FROM d_ot_temporal WHERE tk = _tk and otp = _otp;
  DROP TABLE tbl_tmp_tokenUser; 
      
  ELSE
  SELECT 0; 
  DROP table IF EXISTS `tbl_tmp_tokenUser`;
  
  END IF;
    
  END$$
-- order in
  DROP PROCEDURE IF EXISTS `proc_order_in`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_order_in` (IN `user_id` INT(10), IN `cli_id` INT(10), IN `order_type` TINYINT(1), IN `token` INT(50))  NO SQL
  BEGIN
    DECLARE order_ot mediumint(9);
    DECLARE registro int;
      
      DECLARE nw_exist smallint(6);
    DECLARE ac_exist smallint(6);
    DECLARE tmp_cod_prod 	varchar(30);
    DECLARE tmp_cant_prod	smallint(6);
      DECLARE tmp_xyz_prod	varchar (3);
  
    DECLARE a	int;
    SET	a = 1;    
      
      CREATE TEMPORARY TABLE tbl_tmp_tokenUser
      (
      id int NOT null	AUTO_INCREMENT PRIMARY KEY,
            cod_prod varchar(30), 
            cant_prod smallint(6),
      xyz_prod varchar (3),order_type_prod tinyint(1)
      );
  
    SET registro =(SELECT COUNT(*) FROM d_ot_temporal WHERE user_token = token AND order_type= order_type);
      IF registro > 0 THEN
  INSERT INTO tbl_tmp_tokenUser(cod_prod, cant_prod, xyz_prod, order_type_prod)  SELECT prod_id, prod_q, prod_xyz, order_type FROM d_ot_temporal WHERE user_token = token AND order_type = order_type;
  INSERT INTO order_ot(user_id, cli_id, order_type) VALUES(user_id, cli_id, order_type);
  SET order_ot = LAST_INSERT_ID();
  
  INSERT d_ot(order_id, prod_id, prod_q, prod_xyz) SELECT (order_ot) as noto, prod_id, prod_q, prod_xyz FROM d_ot_temporal WHERE user_token = token AND order_type= order_type;
  
  WHILE a <= registro DO
  SELECT cod_prod,cant_prod,xyz_prod INTO tmp_cod_prod, tmp_cant_prod,tmp_xyz_prod FROM tbl_tmp_tokenUser WHERE id = a;
  SELECT stock_q INTO ac_exist FROM stock WHERE stock_prod_id = tmp_cod_prod AND stock_xyz_xyz = tmp_xyz_prod;
          
  SET nw_exist = ac_exist + tmp_cant_prod;
  UPDATE stock SET stock_q = nw_exist WHERE stock_prod_id = tmp_cod_prod AND stock_xyz_xyz = tmp_xyz_prod;
          
  SET a=a+1;
  END WHILE;
  
  DELETE FROM d_ot_temporal WHERE user_token = token AND order_type = order_type;
  TRUNCATE TABLE tbl_tmp_tokenUser;
  SELECT * FROM order_ot WHERE ot_id = order_ot;
  
  ELSE
  SELECT * FROM sale;
  END IF;
  END$$
-- proc order out
  DROP PROCEDURE IF EXISTS `proc_order_out`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_order_out` (IN `_user` VARCHAR(10), IN `_cl` VARCHAR(10), IN `_otp` TINYINT(1), IN `_tk` VARCHAR(50))  BEGIN
    DECLARE order_ot mediumint(9);
    DECLARE registro int;
      
      DECLARE nw_exist smallint(6);
    DECLARE ac_exist smallint(6);
      DECLARE otp tinyint(1);
    DECLARE tmp_pd	int;
    DECLARE tmp_q	smallint(6);
      DECLARE tmp_xyz	varchar (3);
  
    DECLARE a	int;
      DECLARE _otp tinyint(1);
    SET	a = 1;    
  #tablatemporal
    CREATE TEMPORARY TABLE tbl_tmp_tokenUser(
      id int NOT null	AUTO_INCREMENT PRIMARY KEY,
          pd int, 
      q smallint(6),
      xyz varchar (3),
          otp tinyint(1));
  
    SET registro =(SELECT COUNT(*) FROM d_ot_temporal WHERE tk = _tk and otp=_otp);
      IF registro > 0 THEN

  #inserta en tmptoken
    INSERT INTO tbl_tmp_tokenUser(pd,q,xyz,otp)  SELECT pd,q,xyz,otp FROM d_ot_temporal WHERE tk = _tk;
  #insert en order ot
      INSERT INTO order_ot(user,cl,otp) VALUES(_user,_cl,_otp);
  #setea al ultimo ot
    SET order_ot = LAST_INSERT_ID();
  #insert en detalle
    INSERT d_ot(id,pd,q,xyz) SELECT (order_ot) as noto,pd,q,xyz FROM d_ot_temporal WHERE tk = _tk;
  #------------
  #------------
  #bucle cant registro
  WHILE a <= registro DO
    #switch
    SELECT otp INTO _otp FROM tbl_tmp_tokenUser WHERE id = a;
    #linea a ingresar
      SELECT pd,q,xyz INTO tmp_pd, tmp_q,tmp_xyz FROM tbl_tmp_tokenUser WHERE id = a;
    #exist actual
      SELECT q INTO ac_exist FROM stock WHERE id = tmp_pd AND xyz = tmp_xyz;

  #switch
  case _otp
  WHEN 1 or 4 then
    SET nw_exist = ac_exist + tmp_q;
  WHEN 2 then
    SET nw_exist = ac_exist - tmp_q;
  WHEN 3 then
    SET nw_exist = tmp_q;
  END CASE;

  UPDATE stock SET q = nw_exist WHERE id = tmp_pd AND xyz = tmp_xyz;
  
  SET a=a+1;
  END WHILE;
  #------------------
  #------------------
  DELETE FROM d_ot_temporal WHERE tk = _tk;
  TRUNCATE TABLE tbl_tmp_tokenUser; 
      
  ELSE
  SELECT 0;
  END IF;
    
  END$$
-- show detail ot
  DROP PROCEDURE IF EXISTS `show_detail_ot`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `show_detail_ot` (IN `token` VARCHAR(50), IN `orderType` TINYINT(1))  BEGIN
  SELECT tmp.correlativo, tmp.prod_id, p.prod_name, tmp.prod_xyz, tmp.prod_q, tmp.user_token , tmp.order_type FROM d_ot_temporal tmp INNER JOIN prod p ON tmp.prod_id = p.prod_id WHERE tmp.user_token = token AND tmp.order_type = orderType;
  
  END$$
-- s ot dt 
  DROP PROCEDURE IF EXISTS `s_ot_dt`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `s_ot_dt` (IN `id` VARCHAR(30))  NO SQL
  BEGIN
  SELECT o.ot_id, o.cli_id, p.prod_name ,o.order_date, o.order_type, o.user_id, d.prod_id, d.prod_q, d.prod_xyz FROM ((order_ot o 
  INNER JOIN d_ot d ON o.ot_id = d.order_id)                                                                                      INNER JOIN prod p ON d.prod_id = p.prod_id)                                                                                                       WHERE o.ot_id = id;
  END$$
-- s ot start
  DROP PROCEDURE IF EXISTS `s_ot_start`$$
  CREATE DEFINER=`root`@`localhost` PROCEDURE `s_ot_start` ()  NO SQL
  BEGIN
  SELECT o.ot_id, o.cli_id, o.order_date, t.oder_name, o.user_id, c.cli_name ,c.contacto, c.patente   
  FROM ((order_ot o INNER JOIN cli c ON o.cli_id     = c.cli_rut)  
  INNER JOIN order_type t ON o.order_type = t.order_type_id) ORDER BY o.ot_id DESC
  LIMIT 10;
  END$$

  DELIMITER ;

  -- --------------------------------------------------------
