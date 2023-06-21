-- name: AddProduct :execresult
INSERT INTO user_item (
    user_id,item_id,count
) VALUES (
   ?, ?,?
);

-- name: DeleteProduct :execresult
DELETE FROM user_item WHERE id= ? and user_id = ?;

-- name: GetAllUserProducts :one
SELECT * FROM user_item 
WHERE user_id = ?;





