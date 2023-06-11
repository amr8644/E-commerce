package handlers

import (
	"net/http"
)

func Authnticate(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		if r.URL.Path == "/login" || r.URL.Path == "/register" {
			next.ServeHTTP(w, r)
		}

		msg := Manager.Get(r.Context(), "message")
		if msg == 0 {
			w.WriteHeader(400)
			w.Write([]byte("Not logged in"))
		}

		next.ServeHTTP(w, r)
	})
}
