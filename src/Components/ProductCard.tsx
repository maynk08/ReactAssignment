import React from "react";
import {useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import { initialStateTypes } from "../Redux/reducers/checkLogin";
import { AiOutlineHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  HStack,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { useDispatch,useSelector } from "react-redux";



export interface productCardProps {
  id:number,
  title: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  btnText : string;
  btnSpace:string;
  btnVariant:string,
  clrScheme:string,
  handleClick: () => void
};


const Products = ({
  id,
  title,
  description,
  price,
  image,
  rating,
  btnText,
  btnSpace,
  btnVariant,
  clrScheme,
  handleClick
}: productCardProps) => {


 
      
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
 // const dispatch = useDispatch()
 // const cartItem = useSelector((state:initialStateTypes['cart'])=>state)
  const navigate = useNavigate()
 //console.log(cartItem)



const showDetail = () => {
   const data = {title,description,price,image,rating}
   navigate('/product',{state:data})
}

// title = title.length > 15 ? title.substring(0, 15) + "..." : title;
// description =
//   description.length > 50
//     ? description.substring(0, 50) + "..."
//     : description;


 

  return (
    <>
      <Card w="310px" m="20px" boxShadow="1px 1px 1px 0px grey" h='390px'>
        <CardBody  onClick={showDetail}>
          <Image
            src={image}
            mx="auto"
            alt="product image"
            borderRadius="lg"
            objectFit= "contain"
            boxSize="200px"
            maxH="150px"
            mb='-34px'
            objectPosition="center"
          />
          <Stack mt="50px" spacing="1px">
            <Heading size="sm">{title.substring(0,15)+"..."}</Heading>
            <Text>{description.substring(0,50)+"..."}</Text>
            <HStack>
              {Array.from({ length: filledStars }, (_, index) => (
                <AiFillStar key={index} color="orange" />
              ))}
              {hasHalfStar && <AiFillStar color="orange" />}
              {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
                <AiOutlineStar key={index} color="orange" />
              ))}{" "}
              <Text>({rating})</Text>
            </HStack>
            <Text color="blue.600" fontSize="sm">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider mt='-5px' />
        <CardFooter>
          <ButtonGroup spacing={btnSpace}>
            <Button variant="solid" size="md">
              {<AiOutlineHeart />}
            </Button>
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant={btnVariant} colorScheme={clrScheme} onClick={handleClick} >
              {btnText}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Products;
