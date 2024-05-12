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

	
	var u db.User

	q := db.New(conn.ConnectToDB())
	err := json.NewDecoder(r.Body).Decode(&u)

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	qq := db.New(conn.ConnectToDB())
_, err = qq.LoginUser(context.Background(), u.Email)

	if err == nil {
		return utils.WriteJSON(w, 400, "Email & Username taked...")
	}

	hashed_password, err := utils.HashPassword(u.Password.String)

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	user, err := q.CreateUser(context.Background(), db.CreateUserParams{
		Username: sql.NullString{String: u.Username.String, Valid: true},
		Email:    sql.NullString{String: u.Email.String, Valid: true},
		Password: sql.NullString{String: hashed_password, Valid: true},
	})

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	id, err := user.LastInsertId()

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	Manager.Put(r.Context(), "name", u.Username.String)
	return utils.WriteJSON(w, 200, id)
}

func LoginUser(w http.ResponseWriter, r *http.Request) error {

	var u db.User

	err := json.NewDecoder(r.Body).Decode(&u)

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	q := db.New(conn.ConnectToDB())
	user, err := q.LoginUser(context.Background(), u.Email)

	if err != nil {
		return utils.WriteJSON(w, 400, err)
	}

	check := utils.CheckPasswordHash(u.Password.String, user.Password.String)

	if !check {
		return utils.WriteJSON(w, 400, "Wrong")
	}

	Manager.Put(r.Context(), "name", u.Username.String)
	return utils.WriteJSON(w, 200, u)

}

func LogoutUser(w http.ResponseWriter, r *http.Request) error {
	Manager.Destroy(r.Context())
	return utils.WriteJSON(w, 200, "Success")
}
