-- Create the 'user' table
CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    username TEXT,
    password TEXT,
    created_at TIMESTAMP
);

-- Create the 'user_item' table
CREATE TABLE user_item (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    item_id INTEGER,
    count INTEGER,
    name TEXT,
    price REAL,
    about TEXT,
    picture TEXT
);

-- Add foreign key constraint for 'user_item'
ALTER TABLE user_item
ADD FOREIGN KEY (user_id)
REFERENCES user(id);

