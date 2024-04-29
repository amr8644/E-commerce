const d = document.getElementById("con");
async function addToCart(product) {
    try {

        const userID = window.localStorage.getItem("user");
        const d = await fetch(`https://fakestoreapi.com/products/${product}`)
        const r = await d.json()

        const body = {
            User_ID: { Int64: parseInt(userID), Valid: true },
            Name: { String: r.title, Valid: true },
            Count: { Int64: 1, Valid: true },
            About: { String: r.description, Valid: true },
            Price: { Float64: r.price, Valid: true },
            Picture: { String: r.image, Valid: true },
        };

        const response = await fetch('/add-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
    } catch (error) {
        console.error(error);
    }
}


async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        const data = await response.json();

        data.forEach((product) => {
            d.innerHTML += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top" alt="Product 1">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">$${product.price}</p>
                            <button onClick="addToCart(${product.id})" type="button" class="btn btn-primary">Add to card</a>
                        </div>
                    </div>
                </div>
                   `;
        });
    } catch (error) {
        console.error(error);
    }
}

getProducts();

