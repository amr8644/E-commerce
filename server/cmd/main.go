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
	r.Use(handlers.Authenticate)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})

	// Auth
	r.Post("/register", handlers.HTTPHandler(handlers.RegisterUser))
	r.Post("/login", handlers.HTTPHandler(handlers.LoginUser))
	r.Get("/logout", handlers.HTTPHandler(handlers.LogoutUser))

	// Items
	r.Post("/add-item", handlers.HTTPHandler(handlers.AddProduct))
	r.Delete("/delete-item/{id}", handlers.HTTPHandler(handlers.DeleteProduct))
	r.Get("/cart/{id}", handlers.HTTPHandler(handlers.GetAllUserProduct))

	r.Put("/update", handlers.HTTPHandler(handlers.UpdateProduct))
	http.ListenAndServe(":8000", handlers.Manager.LoadAndSave(r))
}
