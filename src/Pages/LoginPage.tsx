import React from 'react'
import {
  Box,
  Image
} from "@chakra-ui/react";
import Login from '../Components/Login'
const LoginPage = () => {
  return (
  <>
  <Box 
      display='flex'
      backgroundColor='white'
      boxShadow='3px 1px 0px 0px white'
      w="80%"
      p="10px"
      borderRadius="50px"
      ml = '150px'
       mt = '30px'
       h= '40em'
    >
      
     {/* <SignUp/> */}
     <Login/>
      <Image src='https://png.pngtree.com/png-clipart/20221004/original/pngtree-family-shopping-isolated-cartoon-vector-illustration-png-image_8654524.png' ml='60px'/>
     
    </Box>
 
 
  </>
  )
}

export default LoginPage
