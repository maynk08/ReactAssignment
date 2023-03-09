import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Products from '../Components/ProductCard';
import Nav from '../Components/Nav';
import { Flex } from '@chakra-ui/react';
import { initialStateTypes } from '../Redux/reducers/checkLogin';
import { removeItem } from '../Redux/actions/actions';
import { useToast } from '@chakra-ui/react';

const CartPage = () => {
  const [isToastDisplayed, setIsToastDisplayed] = useState(false); // state variable to track whether toast is displayed
  const toast = useToast();
  const cartItems: initialStateTypes['cart'] = useSelector((state: any) => state.cartReducer);
  const dispatch = useDispatch();

  if (cartItems.length === 0 && !isToastDisplayed) {
    toast({
      title: 'No items available in cart',
      description: 'click on add to cart button to add items',
      status: 'warning',
      duration: 5000,
      isClosable: true,
      position: 'top',
    });
    setIsToastDisplayed(true);
  } 
  

  return (
    <>
      <Nav />
      {cartItems.length > 0 ? (
        <Flex flexWrap='wrap' ml='50px'>
          {cartItems.map(({ id, title, description, image, price, rating: { rate } }, key) => (
            <Products
              id = {id}
              title={title}
              description={description}
              image={image}
              price={(parseInt(price) + Math.round(18/100*parseInt(price))).toFixed(2).toString()+ " (including 18% GST)"}
              rating={rate}
              btnText='Remove'
              btnSpace='20px'
              btnVariant='solid'
              clrScheme='red'
              handleClick={() => dispatch(removeItem(id))}
            />
          ))}
        </Flex>
      ) : null}
    </>
  );
};

export default CartPage;
