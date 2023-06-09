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

func RegisterUser(w http.ResponseWriter, r *http.Request) {

	// Create a new user struct
	var u db.User

	q := db.New(conn.ConnectToDB())

	err := json.Decoder(r.Body).Decode(&u)

	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte(log.Println("Error while parsing ")))
	}
	// Add to database
	user, err := q.CreateUser(context.Background(), db.CreateUserParams{
		Name:     sql.NullString{String: u.Name.String, Valid: true},
		Email:    sql.NullString{String: u.Email.String, Valid: true},
		Password: sql.NullString{String: hashed_password, Valid: true},
	})

	return

}

//4llp4jgA3TkMkSqK
//FQ03gaf7aQNVLY9xqHiHzg
