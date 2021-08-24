import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isloading, setISLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setISLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { isloading, products };
};
