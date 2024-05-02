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
        <img class="p-8 rounded-t-lg" src="${product.image}" alt="product image" />
    <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
        <div class="flex items-center mt-2.5 mb-5">
                    </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
            <button type="button" onclick="addToCart(product)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
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
            console.log(product)
            d.innerHTML += `
<tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <img src="/docs/images/products/apple-watch.png"
                                    class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch">
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                Apple Watch
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <button
                                        class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button">
                                        <span class="sr-only">Quantity button</span>
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <div>
                                        <input type="number" id="first_product"
                                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="1" required />
                                    </div>
                                    <button
                                        class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button">
                                        <span class="sr-only">Quantity button</span>
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $599
                            </td>
                            <td class="px-6 py-4">
                                <a href="#"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>



 
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




