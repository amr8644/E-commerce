package handlers

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"fmt"
	"strconv"

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

	fmt.Println(p.UserID.Name)

	item, err := q.AddProduct(context.Background(), db.AddProductParams{
	
		ItemID:  sql.NullInt64{Int64: p.ItemID.Int64, Valid: p.ItemID.Valid},
		UserID:  sql.NullInt64{Int64: int64(1), Valid: p.UserID.Valid},
		Name:    sql.NullString{String: p.Name.String, Valid: p.Name.Valid},
		Count:   sql.NullInt64{Int64: p.Count.Int64, Valid: p.Count.Valid},
		About:   sql.NullString{String: p.About.String, Valid: p.About.Valid},
		Price:   sql.NullFloat64{Float64: p.Price.Float64, Valid: p.Picture.Valid},
		Picture: sql.NullString{String: p.Picture.String, Valid: p.Picture.Valid},
	})

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	return utils.WriteJSON(w, 200, item)
}

func DeleteProduct(w http.ResponseWriter, r *http.Request) error {

	_, err := strconv.Atoi(chi.URLParam(r, "id"))

	var p db.DeleteProductParams
	err = json.NewDecoder(r.Body).Decode(&p)

	if err != nil {
		log.Println(err)
		return utils.WriteJSON(w, 400, err)
	}
	q := db.New(conn.ConnectToDB())

	item, err := q.DeleteProduct(context.Background(), db.DeleteProductParams{
		UserID: sql.NullInt64{Int64: p.UserID.Int64, Valid: true},
		ItemID: sql.NullInt64{Int64: p.ItemID.Int64, Valid: true},
	})

	if err != nil {
		log.Println(err)

		return utils.WriteJSON(w, 400, err)
	}

	return utils.WriteJSON(w, 200, item)
}

func GetAllUserProduct(w http.ResponseWriter, r *http.Request) error {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	id = 1

	q := db.New(conn.ConnectToDB())
	if err != nil {
		log.Println(err)
		return utils.WriteJSON(w, 400, err)
	}

	items, err := q.GetAllUserProducts(context.Background(), sql.NullInt64{Int64: int64(id), Valid: true})

	if err != nil {
		log.Println(err)
		return utils.WriteJSON(w, 400, err)
	}
	fmt.Println(items)
	return utils.WriteJSON(w, 200, items)
}

func UpdateProduct(w http.ResponseWriter, r *http.Request) error {
	var p db.UpdateProductParams

	err := json.NewDecoder(r.Body).Decode(&p)

	if err != nil {
		log.Println(err)
		return utils.WriteJSON(w, 400, err)
	}

	q := db.New(conn.ConnectToDB())

	items, err := q.UpdateProduct(context.Background(), db.UpdateProductParams{
		Count:  sql.NullInt64{Int64: p.Count.Int64, Valid: p.Count.Valid},
		UserID: sql.NullInt64{Int64: p.UserID.Int64, Valid: p.UserID.Valid},
		ItemID: sql.NullInt64{Int64: p.ItemID.Int64, Valid: p.ItemID.Valid},
	})

	if err != nil {
		log.Println(err)
		return utils.WriteJSON(w, 400, err)
	}
	return utils.WriteJSON(w, 200, items)
}
