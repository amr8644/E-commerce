package db

import (
	"context"
	"database/sql"
	_ "embed"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

//go:embed schema/00001_init_schema.up.sql
var ddl string

func Run() error {
	ctx := context.Background()

	db, err := sql.Open("sqlite3", "man.db")
	if err != nil {
		return err
	}
	// create tables
	if _, err := db.ExecContext(ctx, ddl); err != nil {
		return err
	}
	return nil
}

func ConnectToDB() (db *sql.DB) {

	db, err := sql.Open("sqlite3", "man.db")

	if err != nil {
		log.Fatalf("Failed to connect: %v", err)
	}


	if err != nil {
		panic(err)
	}

	log.Println("Successfully connected")

	return db
}