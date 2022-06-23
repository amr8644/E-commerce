const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6d47b7972emsha5bcdb005cde6b7p1c9062jsnee0862a69811",
    "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
  },
};
export const fetchData = async () => {
  const url =
    "https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=iphone&country=US&page=1";

  try {
    const resp = await fetch(url, options);
    const data = await resp.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
