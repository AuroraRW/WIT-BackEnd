DROP TABLE IF EXISTS cards;
CREATE TABLE cards (
	card_id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	description TEXT NOT NULL,
	imageurl TEXT NOT NULL,
	level INTEGER NOT NULL,
    point INTEGER NOT NULL
);