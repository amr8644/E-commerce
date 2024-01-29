package handlers

import (
	"context"
	"database/sql"
	"encoding/json"
	"net/http"

	conn "github.com/server/pkg/db"
	db "github.com/server/pkg/db/SQL"
	"github.com/server/pkg/utils"
)

func RegisterUser(w http.ResponseWriter, r *http.Request) error {

	// Create a new user struct
	var u db.User

	q := db.New(conn.ConnectToDB())

	err := json.NewDecoder(r.Body).Decode(&u)

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	// Hash Password
	hashed_password, err := utils.HashPassword(u.Password.String)

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	// Add to database
	user, err := q.CreateUser(context.Background(), db.CreateUserParams{
		Name:     sql.NullString{String: u.Name.String, Valid: true},
		Email:    sql.NullString{String: u.Email.String, Valid: true},
		Picture:  sql.NullString{String: u.Picture.String, Valid: true},
		Password: sql.NullString{String: hashed_password, Valid: true},
	})

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	// Store a new key and value in the session data.
	Manager.Put(r.Context(), "name", u.Name.String)
	return utils.WriteJSON(w, 200, user)
}

func LoginUser(w http.ResponseWriter, r *http.Request) error {

	// Create a new user struct
	var u db.User

	q := db.New(conn.ConnectToDB())

	err := json.NewDecoder(r.Body).Decode(&u)

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	// Add to database
	user, err := q.LoginUser(context.Background(), u.Email)

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	check := utils.CheckPasswordHash(u.Password.String, user.Password.String)

	if !check {
		return utils.WriteJSON(w, 400, "Wrong")
	}

	Manager.Put(r.Context(), "name", u.Name.String)
	return utils.WriteJSON(w, 200, user)

}

func LogoutUser(w http.ResponseWriter, r *http.Request) error {
	Manager.Destroy(r.Context())

	return utils.WriteJSON(w, 200, "Success")
}
