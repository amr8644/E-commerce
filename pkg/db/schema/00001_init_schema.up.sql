-- Create the 'user' table
CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    username TEXT,
    password TEXT,
    created_at TIMESTAMP
);

-- Create the 'user_item' table
CREATE TABLE IF NOT EXISTS user_item (
        id INTEGER PRIMARY KEY,
        title TEXT,
        price TEXT,
        category TEXT,
        description TEXT,
        image TEXT
)
-- Add foreign key constraint for 'user_item'
ALTER TABLE user_item
ADD FOREIGN KEY (user_id)
REFERENCES user(id);

