package handlers

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	conn "github.com/server/pkg/db"
	db "github.com/server/pkg/db/SQL"
	"github.com/server/pkg/utils"
)

func RegisterUser(w http.ResponseWriter, r *http.Request) {

	// Create a new user struct
	var u db.User

	q := db.New(conn.ConnectToDB())

	err := json.NewDecoder(r.Body).Decode(&u)

	if err != nil {
		w.WriteHeader(400)
		log.Println("Error while parsing ")
	}

	// Hash Password
	hashed_password, err := utils.HashPassword(u.Password.String)
	if err != nil {
		log.Println("Error hashing password")
		w.Write([]byte("Error hashing password"))
	}

	// Add to database
	user, err := q.CreateUser(context.Background(), db.CreateUserParams{
		Name:     sql.NullString{String: u.Name.String, Valid: true},
		Email:    sql.NullString{String: u.Email.String, Valid: true},
		Password: sql.NullString{String: hashed_password, Valid: true},
	})

	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte("Error creating user"))
		return
	}

	// Store a new key and value in the session data.
	Manager.Put(r.Context(), u.Email.String, u.Name.String)

	log.Println(user)
}

func LoginUser(w http.ResponseWriter, r *http.Request) {

	// Create a new user struct
	var u db.User

	q := db.New(conn.ConnectToDB())

	err := json.NewDecoder(r.Body).Decode(&u)

	if err != nil {
		w.WriteHeader(400)
		log.Println("Error while parsing ")
	}

	if err != nil {
		log.Println("Error hashing password")
		w.Write([]byte("Error hashing password"))
	}

	// Add to database
	user, err := q.LoginUser(context.Background(), u.Email)

	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte("Error user not found"))
		return
	}

	check := utils.CheckPasswordHash(u.Password.String, user.Password.String)
	if !check {
		w.WriteHeader(400)
		w.Write([]byte("Wrong Password"))
		return
	}

	// Store a new key and value in the session data.
	Manager.Put(r.Context(), u.Email.String, u.Name.String)

	log.Println(user)
}

func LogoutUser(w http.ResponseWriter, r *http.Request) {
	Manager.Destroy(r.Context())
}

//4llp4jgA3TkMkSqK
//FQ03gaf7aQNVLY9xqHiHzg
