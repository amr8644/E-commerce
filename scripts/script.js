const userID = window.localStorage.getItem("user");
const d = document.getElementById("con");
const currentURL = window.location.href;


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
        console.log(data)
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

            

<div class="w-full m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="${product.image}" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
                    </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

                   `;
        });
    } catch (error) {
        console.error(error);
    }
}

function updateUI() {
    const element = document.getElementById("con");
    const para = document.createElement("div");

    element.remove();
    para.setAttribute("id", "con");

    para.setAttribute("class", "row row-cols-1 row-cols-md-3 g-4");
    document.getElementById("main-con").appendChild(para);

    getProducts(parseInt(userID));
}

async function deleteProduct(id) {
    try {
        const body = {
            User_ID: {
                Int64: parseInt(userID),
                Valid: true
            },
            ID: id,
        };
        const response = await fetch('/delete/${id}', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        updateUI();

        console.log(data)
    } catch (error) {
        console.error(error);
    }

}

async function updateProduct(count, id) {
    try {
        const body = {
            Count: {
                Int64: count,
                Valid: true
            },
            User_ID: {
                Int64: parseInt(userID),
                Valid: true
            },

            ID: id,

        };

        if (count != 0) {
            const response = await fetch('/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            console.log(data)
            updateUI();
        }

        console.log(data)
    } catch (error) {
        console.error(error);
    }

}
async function getAllUserProducts(id) {

    const d = document.getElementById("con");
    try {
        const response = await fetch(`/cart/${id}`);
        const data = await response.json();
        data.map((product) => {
            d.innerHTML += `
                <div id="toremove" class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
        <div class="col-md-4">
          <img src="${product.picture.String}" class="card-img-top" alt="Product 1">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${product.name.String}</h5>
            <p class="card-text">$${product.price.Float64}</p>
            <button onClick="updateProduct(${(product.count.Int64 + 1)}, ${product.id})" class="btn btn-primary btn-sm">+</button>
            <p>${product.count.Int64}</p>
            <button onClick="updateProduct(${(product.count.Int64 - 1)}, ${product.id})" class="btn btn-primary btn-sm">-</button>
          <button onClick="deleteProduct(${product.id})" type="button" class="btn btn-dark">Delete</button>

          </div>
        </div>
      </div>
    </div>
    
                    `;
        });

    } catch (error) {
        console.error(error);
    }
}


if (currentURL.indexOf("/mycart") !== -1) {
    getAllUserProducts(parseInt(userID));
}
if (currentURL.indexOf("/dashboard") !== -1) {
    getProducts();
}




