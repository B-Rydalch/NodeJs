DROP TABLE parents;
DROP TABLE children; 
DROP TABLE grounded; 

CREATE TABLE parents
(
    id SERIAL PRIMARY KEY
    , name varchar(250) NOT NULL
    , password VARCHAR(255)  NOT NULL
);

CREATE TABLE children
(
    id SERIAL PRIMARY KEY -- primary key column
    , name VARCHAR(50) NOT NULL
    , age  SMALLINT  NOT NULL
);

CREATE TABLE grounded
(
    id SERIAL PRIMARY KEY -- primary key column
    , item_name VARCHAR(50)  NOT NULL
    , number_times_grounded INT NULL
    , duration TIMESTAMP NULL 
    , children_id SMALLINT   NOT NULL REFERENCES children(id)
    -- specify more columns here
);

/*************DEFAULT DATA ****************/
INSERT INTO parents (name,password) values('DAD','password'), ('mom', 'mom');

INSERT INTO children (name, age) VALUES('ELI', 5)
                                    ,  ('LIAM', 4)
                                    ,  ('CARTER', 2);
