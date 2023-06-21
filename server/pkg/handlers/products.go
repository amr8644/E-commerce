package handlers

import (
	"context"
	"database/sql"
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi/v5"
	conn "github.com/server/pkg/db"
	db "github.com/server/pkg/db/SQL"
	"github.com/server/pkg/utils"
)

func AddProduct(w http.ResponseWriter, r *http.Request) error {

	var p db.AddProductParams

	q := db.New(conn.ConnectToDB())

	err := json.NewDecoder(r.Body).Decode(&p)

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	item, err := q.AddProduct(context.Background(), db.AddProductParams{
		UserID: sql.NullInt32{Int32: p.UserID.Int32, Valid: p.UserID.Valid},
		ItemID: sql.NullInt32{Int32: p.ItemID.Int32, Valid: p.ItemID.Valid},
	})

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	return utils.WriteJSON(w, 200, item)
}
func DeleteProduct(w http.ResponseWriter, r http.Request){

	id := chi.URLParam(r,"id")
	q := db.New(conn.ConnectToDB())

	item,err: = q.DeleteProduct(context.Background(),db.DeleteProductProdcuts{
		User
	})

}