async function handleSubmit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    const body = {
        Username: { String: username, Valid: true },
        Email: { String: email, Valid: true },
        Password: { String: password, Valid: true }
    };
    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}