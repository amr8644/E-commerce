const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");

async function login() {
  const body = {
    Username: { String: usernameInput.value, Valid: true },
       Password: { String: passwordInput.value, Valid: true },
  };

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
 
     const d = await response.json();
        
    console.log(d)
    if (response.ok) {
        window.location.href = "/dashboard";
    }

    return d;
  } catch (error) {
    
    alert(error)
    console.log(error);
  }
}

async function register() {
  const body = {
    Username: { String: usernameInput.value, Valid: true },
    Email: { String: emailInput.value, Valid: true },
    Password: { String: passwordInput.value, Valid: true },
  };

  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const d = await response.json();
  if (response.ok) {
window.location.href = "/signin";
      }
          return d;
  } catch (error) {
    console.log(error);
  }
}
