import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { item } from "../Redux/actions/actions";
import Products from "./ProductCard";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import Nav from "../Components/Nav";
import { useToast } from '@chakra-ui/react'
import { setCart } from "../Redux/actions/actions";



type productDataProps = {
  id:number,
  title: string;
  description: string;
  price: string;
  image: string;
  rating: {
    rate:number
  };
  btnText : string;
  btnSpace:string;
  btnVariant:string,
  clrScheme:string,
  handleClick: () => void
};

const Homepage = () => {
  const [products, setProduct] = useState<productDataProps[]>([]);
  const toast = useToast()
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    setProduct(response.data);
  };

  useEffect(() => {
    fetchProducts();
  //  console.log(products);
  }, []);

  var addedItems = useSelector((state:any)=>state.cartReducer)
 // console.log(addedItems)

  const addItems = ({id,title,description,image,price,rating:{rate}}:item) => {
     console.log(addedItems)
    addedItems.find((ele:any)=>ele.id == id) ?   toast({
      title: "Item already added !",
      status: "error",
      duration: 5000,
      isClosable: true,
      position:"top",
    }):dispatch(setCart({id,title,description,image,price,rating:{rate}}))    
  }

 

  return (
    <>
    <Nav/>
    <Flex flexWrap='wrap' justifyContent='center'>
      {products.map(
        ({ title, description, image, price, rating: { rate } }, id) => (
          <Products
            id= {id}
            title={title}
            description={description}
            image={image}
            price={price}
            rating={rate}
            btnSpace='10px'
            btnText = "Add to Cart"
            btnVariant="outline"
            clrScheme="blue"
            handleClick={()=>addItems({id,title,description,image,price,rating:{rate}})}
          />
        )
      )}
      </Flex>
    </>
  )
};
export default Homepage;
