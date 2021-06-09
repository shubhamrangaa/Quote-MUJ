-- CREATE DATABASE blog-trial;

CREATE TABLE blog(
    slug varchar(255) UNIQUE NOT NULL PRIMARY KEY,
    categories varchar(255) NOT NULL, 
    author varchar(255) NOT NULL, 
    heading text NOT NULL, 
    caption text NOT NULL,
    images text,
    videos text, 
    article_data json NOT NULL,
    date_created timestamptz  [0], 
    likes int DEFAULT 0
);

CREATE TABLE categories(
    c_id INT UNIQUE NOT NULL PRIMARY KEY,
    name varchar(255) NOT NULL,
    slug text NOT NULL,
    FOREIGN KEY (slug) REFERENCES blog(slug)
);

