package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/server/pkg/handlers"
)

func main() {

	r := chi.NewRouter()

	handlers.InitSessions()

	r.Use(middleware.Logger)
	r.Use(handlers.Authnticate)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})

	// Auth
	r.Post("/register", handlers.RegisterUser)
	r.Post("/login", handlers.LoginUser)
	r.Get("/logout", handlers.LogoutUser)

	// Items
	r.Post("/add-item",handlers.AddProduct)

	// Users

	http.ListenAndServe(":8000", handlers.Manager.LoadAndSave(r))
}
