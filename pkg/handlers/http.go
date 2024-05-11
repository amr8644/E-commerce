package handlers

import (
	"net/http"
	"github.com/server/pkg/utils"
)

type APIError struct {
	Err    string
	Status int
}

func (e APIError) Error() string {
	return e.Err
}


type APIFunc func(http.ResponseWriter, *http.Request) error

func HTTPHandler(f APIFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := f(w, r); err != nil {
			if e, ok := err.(*APIError); ok {
				utils.WriteJSON(w, e.Status, e)
				return
			}
			utils.WriteJSON(w, http.StatusInternalServerError, APIError{Err: "Internal Server"})
		}
	}
}

    
