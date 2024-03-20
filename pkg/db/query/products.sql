-- name: AddProduct :execresult
INSERT INTO user_item (
    user_id, count, name, price, about, picture
) VALUES (
    ?, ?, ?, ?, ?, ?
);

-- name: DeleteProduct :execresult
DELETE FROM user_item WHERE id = ? AND user_id = ?;

-- name: GetAllUserProducts :many
SELECT * FROM user_item
WHERE user_id = ?;

-- name: UpdateProduct :execresult
UPDATE user_item SET count = ? WHERE user_id = ? AND id = ?;

