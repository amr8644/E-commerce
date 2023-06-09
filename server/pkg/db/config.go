package db

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func ConnectToDB() (db *sql.DB) {

	log.Println("Connecting to MySQL DB...")

	DSN := "root:QoxVl6zxqlFEcOOKSK8E@tcp(containers-us-west-34.railway.app:6940)/railway"

	db, err := sql.Open("mysql", DSN)

	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}

	if err := db.Ping(); err != nil {
		log.Fatalf("Failed to ping: %v", err)
	}

	if err != nil {
		panic(err)
	}

	log.Println("Successfully connected")

	return db
}