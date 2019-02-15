DROP DATABASE IF EXISTS detoura_mailList;

CREATE DATABASE detoura_mailList;

USE detoura_mailList;

CREATE TABLE leads (
  id INT NOT NULL AUTO_INCREMENT,
  query_name VARCHAR(45) NULL,
  email VARCHAR(45),
  query_message VARCHAR(100),
  PRIMARY KEY (id)
);