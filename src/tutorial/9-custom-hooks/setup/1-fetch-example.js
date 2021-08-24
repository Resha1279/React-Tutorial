import React from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { isLoading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{isLoading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
