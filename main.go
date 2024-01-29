package main

import (
	"html/template"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/server/pkg/handlers"
)

func main() {

	r := chi.NewRouter()

	handlers.InitSessions()

	r.Use(middleware.Logger)
	//r.Use(handlers.Authenticate)

	tmpl := template.Must(template.ParseGlob("templates/*"))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})

	// Static Routes
	r.Get("/signup", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "index.tmpl", nil)
	})

	// Auth
	r.Post("/register", handlers.HTTPHandler(handlers.RegisterUser))
	r.Post("/logout", handlers.HTTPHandler(handlers.LogoutUser))
	r.Get("/login", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "login.tmpl", nil)
        handlers.HTTPHandler(handlers.LoginUser)
    })

	// Items
	r.Post("/add-item", handlers.HTTPHandler(handlers.AddProduct))
	r.Delete("/delete-item/{id}", handlers.HTTPHandler(handlers.DeleteProduct))
	r.Get("/cart/{id}", handlers.HTTPHandler(handlers.GetAllUserProduct))
	r.Put("/update", handlers.HTTPHandler(handlers.UpdateProduct))

	http.ListenAndServe(":8000", handlers.Manager.LoadAndSave(r))
}
