import React from 'react'
import {
  Box,
  Image
} from "@chakra-ui/react";
import Login from '../Components/Login'
import { useSelector} from 'react-redux/es/exports';

import SignUp from '../Components/SignUp';

interface actionTypes {
  regReducer : boolean
}



const LoginPage = () => {
  let loginState = useSelector((state:actionTypes)=>{
    console.log(state.regReducer)
    return state.regReducer
  })
  
  
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
       mt = '60px'
       h= '40em'
    >
      
     {loginState?<Login/> : <SignUp/>}
     
      <Image src='https://png.pngtree.com/png-clipart/20221004/original/pngtree-family-shopping-isolated-cartoon-vector-illustration-png-image_8654524.png' ml='60px'/>
     
    </Box>
 
 
  </>
  )
}

export default LoginPage
