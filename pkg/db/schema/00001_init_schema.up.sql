-- Create the 'user' table
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    username TEXT,
    password TEXT,
    created_at TIMESTAMP
);

-- Create the 'user_item' table
CREATE TABLE IF NOT EXISTS user_item (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    item_id INTEGER,
    count INTEGER,
    name TEXT,
    price REAL,
    about TEXT,
    picture TEXT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

