-- name: CreateUser :execresult
INSERT INTO user (
  name, email, password
) VALUES (
   ?, ?, ?
);

-- name: LoginUser :one
SELECT * FROM user
WHERE email = ?;