export const getData = async (e) => {
  if (e) {
    const { id } = e;
    const url = `https://fakestoreapi.com/products/${id}`;
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      return data;
    } catch (error) {
      return error;
    }
  }
};
