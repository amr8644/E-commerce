const userID = window.localStorage.getItem("user");
const d = document.getElementById("con");

function updateUI() {
  const element = document.getElementById("con");
  element.remove()

  const para = document.createElement("tbody");
  para.setAttribute("id", "con");

  para.setAttribute("class", "row row-cols-1 row-cols-md-3 g-4");
  document.getElementById("main-con").appendChild(para);

  getAllUserProducts(parseInt(userID));
}

async function deleteProduct(id) {
  try {
    const body = {
      User_ID: {
        Int64: parseInt(userID),
        Valid: true,
      },
      ID: id,
    };
    const response = await fetch("/delete/${id}", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    updateUI();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function updateProduct(count, id) {
  try {
    const body = {
      Count: {
        Int64: count,
        Valid: true,
      },
      User_ID: {
        Int64: parseInt(userID),
        Valid: true,
      },

      ID: id,
    };

    if (count != 0) {
      const response = await fetch("/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
      updateUI();
    }
  } catch (error) {
    console.error(error);
  }
}
async function getAllUserProducts(id) {
  const d = document.getElementById("con");
  try {
    let total = 0;
    const response = await fetch(`/cart/${id}`);
    const data = await response.json();
      console.log(data)
    data.map((product) => {
      total += product.price.Float64
      console.log(total)
      d.innerHTML += `
                           <tr
                           id="${id}"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <img src="${product.picture.String}
                                    class="w16- md:w-32 max-w-full max-h-full" alt="Apple Watch">
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                             ${product.name.String}
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <button
                                    
                                    onclick="updateProduct(${product.count.Int64 - 1},${product.id})"                                        class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                                        <span 
                                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             required >${product.count.Int64} </span>
                                    </div>
                                    <button
                                    onclick="updateProduct(${product.count.Int64 + 1},${product.id})"                                        class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                                $${product.price.Float64 * product.count.Int64}
                            </td>
                            <td class="px-6 py-4">
                                <button onclick="deleteProduct(${product.id})" type="button"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">
                                    Remove</button>
                            </td>
                        </tr>
 
                    `;
    });
  } catch (error) {
    console.error(error);
  }
}
getAllUserProducts(parseInt(userID));
