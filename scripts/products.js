const userID = window.localStorage.getItem("user");
const d = document.getElementById("con");

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
