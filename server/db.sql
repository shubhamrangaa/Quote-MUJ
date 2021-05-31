CREATE TABLE blog (
	slug VARCHAR (10) PRIMARY KEY UNIQUE NOT NULL,
	categories VARCHAR(100) [] NOT NULL,
	author VARCHAR (100) NOT NULL,
	heading TEXT NOT NULL,
	descr TEXT NOT NULL,
	img TEXT NOT NULL,
	article_data JSON NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
	likes INT DEFAULT 0
);