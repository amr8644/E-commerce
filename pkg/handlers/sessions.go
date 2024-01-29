package handlers

import (
	"github.com/alexedwards/scs/v2"
	"github.com/alexedwards/scs/v2/memstore"
)

// Create a global variable for the session manager.
var Manager *scs.Session

func InitSessions() {
	// Initialize the session manager and configure it to use memstore as
	// the session store.
	Manager = scs.NewSession()
	Manager.Store = memstore.New()
}
