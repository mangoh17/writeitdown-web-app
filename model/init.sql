DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS lists;
DROP TABLE IF EXISTS posts;


 CREATE TABLE users  (
id INT AUTO_INCREMENT,
name VARCHAR(20),
PRIMARY KEY (id));

 CREATE TABLE lists  (
id INT AUTO_INCREMENT,
name VARCHAR(50),
userID INT,
PRIMARY KEY (id),
FOREIGN KEY (userID) REFERENCES users (id)
);

 CREATE TABLE posts  (
id INT AUTO_INCREMENT,
title VARCHAR(100),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
description VARCHAR(500),
listID INT,
imageID // not added yet 
PRIMARY KEY (id),
FOREIGN KEY (listID) REFERENCES lists (id)
);

--  CREATE TABLE images (
-- id INT AUTO_INCREMENT,
-- name VARCHAR(50),
-- Image BLOB
-- postID INT,
-- PRIMARY KEY (id),
-- FOREIGN KEY (postID) REFERENCES posts (id)
-- );

INSER INTO users (name) values ("CarlitaMaria")