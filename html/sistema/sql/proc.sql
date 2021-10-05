CREATE DEFINER=`root`@`localhost` PROCEDURE `proc`(
IN `_cli`   INT(10),
IN `_ty`    TINYINT(1),
IN `_tk`    INT(10))
    NO SQL
BEGIN
-- ---------------------------------------
	DECLARE id_ot mediumint(9);
	DECLARE registro int;
	DECLARE reg int;

    DECLARE nw_exist smallint(6);
	DECLARE ac_exist smallint(6);
	DECLARE tmp_cod_prod 	varchar(30);
	DECLARE tmp_cant_prod	smallint(6);
    DECLARE tmp_xyz_prod	varchar (3);

	DECLARE a   int;
-- ---------------------------------------
SET	a = 1;    
    CREATE TEMPORARY TABLE tbl_tmp_tokenUser
		(tmp_id int NOT null    AUTO_INCREMENT PRIMARY KEY,tmp_prod varchar(30),tmp_q smallint(6),
		tmp_xyz varchar (3),tmp_type tinyint(1));
	SET registro =(
        SELECT COUNT(*) FROM tmp_d_ot 
        WHERE tk = _tk AND ty= _ty);
    IF registro > 0 THEN
		INSERT INTO tbl_tmp_tokenUser(tmp_prod, tmp_q,tmp_xyz,tmp_type) 
        SELECT prod,q, xyz,ty FROM tmp_d_ot
        WHERE tk = _tk AND ty = _ty;
--  order OT--------------
	INSERT INTO ot(tk, cli, ty) VALUES(_tk, _cli, _ty);

    SET id_ot = LAST_INSERT_ID();
-- detalle OT
	INSERT d_ot(id_order,prod,q,xyz)
    SELECT (id_ot) AS noto,prod,q,xyz
    FROM tmp_d_ot WHERE tk = _tk AND ty= _ty;

-- mientras
    WHILE a <= registro DO
	    SELECT tmp_prod,tmp_q,tmp_xyz INTO tmp_cod_prod,tmp_cant_prod,tmp_xyz_prod FROM tbl_tmp_tokenUser WHERE tmp_id = a;
    -- condicion--------------------
	    SET reg =(
            SELECT COUNT(*) FROM stock WHERE id = tmp_cod_prod AND xyz = tmp_xyz_prod);
        IF reg = 0 THEN
        -- prepara var ac_exist, tmp_cant_prod
            set ac_exist = 0;
            INSERT INTO stock(id,xyz,q)VALUES(tmp_cod_prod,tmp_xyz_prod,ac_exist);
            if _ty=1 or 4  then    
	            SET nw_exist = ac_exist + tmp_cant_prod;
            end if;
            if _ty=2  then    
	            SET nw_exist = ac_exist - tmp_cant_prod;
            end if;
            if _ty=3  then    
	            SET nw_exist = tmp_cant_prod;
            end if;
        ELSE
        -- prepara var ac_exist, tmp_cant_prod
            SELECT q INTO ac_exist FROM stock WHERE id = tmp_cod_prod AND xyz = tmp_xyz_prod;
            if _ty=1 or 4  then    
	            SET nw_exist = ac_exist + tmp_cant_prod;
            end if;
            if _ty=2  then    
	            SET nw_exist = ac_exist - tmp_cant_prod;
            end if;
            if _ty=3  then    
	            SET nw_exist = tmp_cant_prod;
            end if;
        END IF;
        UPDATE stock SET q = nw_exist WHERE id = tmp_cod_prod AND xyz = tmp_xyz_prod;
	    SET a=a+1;
	END WHILE;
    DELETE FROM tmp_d_ot WHERE tk= _tk AND ty= _ty;
    TRUNCATE TABLE tbl_tmp_tokenUser;
    SELECT * FROM ot WHERE id = id_ot;
    call d_stock_0;
    ELSE
	SELECT 0;
    END IF;
END
