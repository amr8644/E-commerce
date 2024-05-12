package main

import (
	"html/template"
	"log"
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

	if err := db.Run(); err != nil {
		log.Fatal(err)
	}

	templ := template.Must(template.ParseGlob("templates/*"))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})

	// Static Routes
	r.Get("/signup", func(w http.ResponseWriter, r *http.Request) {
		templ.ExecuteTemplate(w, "register.html", nil)
	})
	r.Get("/signin", func(w http.ResponseWriter, r *http.Request) {
		templ.ExecuteTemplate(w, "login.html", nil)
	})

	// Serve JavaScript file with the correct MIME type
	r.Get("/scripts/products.js", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(w, r, "scripts/products.js")
	})
	r.Get("/scripts/carts.js", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(w, r, "scripts/carts.js")
	})
	r.Get("/scripts/auth.js", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(w, r, "scripts/auth.js")
	})

	r.Get("/dashboard", func(w http.ResponseWriter, r *http.Request) {
		templ.ExecuteTemplate(w, "dashboard.html", nil)
	})

	r.Get("/mycart", func(w http.ResponseWriter, r *http.Request) {
		templ.ExecuteTemplate(w, "viewcart.html", nil)
	})

	// Auth
	r.Post("/register", handlers.HTTPHandler(handlers.RegisterUser))
	r.Get("/logout", handlers.HTTPHandler(handlers.LogoutUser))
	r.Post("/login", handlers.HTTPHandler(handlers.LoginUser))

	// Items
	r.Post("/add-item", handlers.HTTPHandler(handlers.AddProduct))
	r.Delete("/delete/{id}", handlers.HTTPHandler(handlers.DeleteProduct))
	r.Get("/cart/{id}", handlers.HTTPHandler(handlers.GetAllUserProduct))
	r.Put("/update", handlers.HTTPHandler(handlers.UpdateProduct))

	http.ListenAndServe(":8000", handlers.Manager.LoadAndSave(r))
}
