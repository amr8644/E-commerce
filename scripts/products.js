const userID = window.localStorage.getItem("user");
const d = document.getElementById("con");

function toast() {
   d.innerHTML += ` <div id="toast-success" class="flex absolute items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="sr-only">Check icon</span>
            </div>
            <div class="ms-3 text-sm font-normal">Item moved successfully.</div>
            <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>`
 }

async function addToCart(product) {
  try {
    const userID = window.localStorage.getItem("user");
    const d = await fetch(`https://fakestoreapi.com/products/${product}`);
    const r = await d.json();

    const body = {
      User_ID: { Int64: parseInt(userID), Valid: true },
      Name: { String: r.title, Valid: true },
      Count: { Int64: 1, Valid: true },
      About: { String: r.description, Valid: true },
      Price: { Float64: r.price, Valid: true },
      Picture: { String: r.image, Valid: true },
    };

    const response = await fetch("/add-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
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

            <button type="button" onclick="addToCart(${product.id})" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>

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
  getProducts();
