-- CREATE DATABASE blog-trial;

CREATE TABLE blog(
    slug varchar(255) UNIQUE NOT NULL PRIMARY KEY,
    categories varchar(255) NOT NULL, 
    author varchar(255) NOT NULL, 
    heading text NOT NULL, 
    caption text NOT NULL,
    article_data json NOT NULL,
    date_created timestamptz  [0], 
    likes int DEFAULT 0
);

