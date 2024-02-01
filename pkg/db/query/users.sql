-- name: CreateUser :execresult
INSERT INTO user (
    username, email, password
) VALUES (
    ?, ?, ?
);

-- name: LoginUser :one
SELECT * FROM user
WHERE email = ?;

