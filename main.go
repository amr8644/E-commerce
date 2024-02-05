package main

import (
	"html/template"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/server/pkg/db"
	"github.com/server/pkg/handlers"
)

func main() {

	r := chi.NewRouter()

	handlers.InitSessions()

	r.Use(middleware.Logger)
	//r.Use(handlers.Authenticate)

	db.Run().Error()

	tmpl := template.Must(template.ParseGlob("templates/*"))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})

	// Static Routes
	r.Get("/signup", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "register.tmpl", nil)
	})
	r.Get("/login", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "login.tmpl", nil)
	})
	r.Get("/dashboard", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "dashboard.tmpl", nil)
	})

	r.Get("/mycart", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "viewcart.tmpl", nil)
	})
	// Auth
	r.Post("/register", handlers.HTTPHandler(handlers.RegisterUser))
	r.Get("/logout", handlers.HTTPHandler(handlers.LogoutUser))
	r.Post("/rlogin", handlers.HTTPHandler(handlers.LoginUser))

	// Items
	r.Post("/add-item", handlers.HTTPHandler(handlers.AddProduct))
	r.Delete("/delete-item/{id}", handlers.HTTPHandler(handlers.DeleteProduct))
	r.Get("/cart/{id}", handlers.HTTPHandler(handlers.GetAllUserProduct))
	r.Put("/update", handlers.HTTPHandler(handlers.UpdateProduct))

	http.ListenAndServe(":8000", handlers.Manager.LoadAndSave(r))
}
