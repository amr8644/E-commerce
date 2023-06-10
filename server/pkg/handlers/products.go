package handlers

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	conn "github.com/server/pkg/db"
	db "github.com/server/pkg/db/SQL"
)

func AddProduct(w http.ResponseWriter, r *http.Request) {

	var p db.AddProductParams

	q := db.New(conn.ConnectToDB())

	err := json.NewDecoder(r.Body).Decode(&p)

	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte("Error parsing"))
		return
	}

	item, err := q.AddProduct(context.Background(), db.AddProductParams{
		UserID: sql.NullInt32{Int32: p.UserID.Int32, Valid: p.UserID.Valid},
		ItemID: sql.NullInt32{Int32: p.ItemID.Int32, Valid: p.ItemID.Valid},
	})

	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte("Error adding item"))
		return
	}

	log.Println(item)
}
