DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name varchar(250) not null,
  devoured boolean default false,
  PRIMARY KEY (id)
);