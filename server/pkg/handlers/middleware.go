package handlers

import (
	"net/http"

	"github.com/server/pkg/utils"
)

func Authenticate(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		allowed_urls := []string{"/login", "/register", "/signin", "/signup", "/scripts/auth.js", "/scripts/cart.js", "/scripts/products.js"}
		if utils.CheckIfThere(allowed_urls,r.URL.Path) {
			next.ServeHTTP(w, r)
		} else {
			msg := Manager.Get(r.Context(), "name")
			if msg == nil {
				utils.WriteJSON(w, 401, "Not Authorized")
				return
			}
			next.ServeHTTP(w, r)
		}
	})
}
