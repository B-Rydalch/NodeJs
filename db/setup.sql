DROP TABLE parents CASCADE;
DROP TABLE children CASCADE; 
DROP TABLE grounded CASCADE; 

CREATE TABLE parents (
	id 			 SERIAL 		PRIMARY KEY
	, name 	     VARCHAR(250)	UNIQUE	NOT NULL 
    , password 	 VARCHAR(250) 	NOT NULL
    , email      VARCHAR(250)   NOT NULL 
);

CREATE TABLE children (
    id              SERIAL           PRIMARY KEY
    , child_name    VARCHAR(250)     NOT NULL 
    , age           SMALLINT         NOT NULL
    , num_grounded  INT              NULL         /* NULL IF NEVER BEEN GROUNDED */
);

CREATE TABLE grounded (
   id               SERIAL 	     PRIMARY KEY
    , item          VARCHAR(250) NULL                         /* WHICH ITEM IS TAKEN AWAY           */
    , reason        text         NULL                         /* IF NOT GROUNDED THEN NO REASON     */
    , amount        TIMESTAMP    NULL                         /* STORE THE AMOUNT OF TIME GROUNDED  */
    , child_id      SMALLINT     NULL REFERENCES children(id) /* which child is grounded            */
    , parent_id     SMALLINT     NULL REFERENCES parent(id)   /* which parent grounded the child    */ 
);

/****DEFAULT DATA*****/
INSERT INTO parents (name,password) VALUES('dad','dad'), ('mom', 'mom');

INSERT INTO children(name, age) 
VALUES ('Eli', 5)
       , ('Liam', 4)
       , ('Carter', 2) 