import React, { useEffect, useState } from "react";
import Products from "./ProductCard";
import axios from "axios";
import { Flex } from "@chakra-ui/react";

type productDataProps = {
  title: string;
  description: string;
  price: string;
  image: string;
  rating: {
    rate: number;
  };
};

const Homepage = () => {
  const [products, setProduct] = useState<productDataProps[]>([]);
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <>
    <Flex flexWrap='wrap' justifyContent='center'>
      {products.map(
        ({ title, description, image, price, rating: { rate } }, key) => (
          <Products
            title={title}
            description={description}
            image={image}
            price={price}
            rating={rate}
          />
        )
      )}
      </Flex>
    </>
  )
};

export default Homepage;
