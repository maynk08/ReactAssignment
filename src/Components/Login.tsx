import React from "react";
import {useNavigate} from 'react-router-dom'
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { setCart , regStatus } from "../Redux/actions/actions";
import { useState,useEffect } from "react";


type formData = {
  email: string;
  password: string;
};

const initialValue: formData = {
  email: "",
  password: "",
};


const validateForm = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});


const Login = () => {

  interface actionTypes {
    regStatus : boolean
  }

  // let loginState:any = useSelector((state:actionTypes)=>{
  //   //console.log(state.changeRegStatus)
  //   return state.regStatus
  // })
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()

  // useEffect(()=> {
  //   localStorage.setItem('userReg',JSON.stringify(isRegistered))
  // },[isRegistered])

  const handleSubmit = (values: formData) => {
  
    const data = JSON.parse(localStorage.getItem("userInfo") || "")
    const {email,password} = values
    
    if(data.email === email && data.password === password) {
      toast({
        title: "success !",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      navigate('/home')
          console.log('Login Successfull')
    }
  
    else {
      toast({
        title: "Invalid credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
        position:"bottom",
      });
      console.log('user not logged in , register first')
    }
  
    //localStorage.setItem('userInfo',JSON.stringify(values))
    // console.log(values);
  };
  
    
  return (
    <>
      {/* {isRegistered ? ( */}
        <Box
          w="35%"
          mt="80px"
          ml="10px"
          pl='30px'
          h="450px"
          borderRight="1px solid grey"
          pr="80px"
        >
          <Heading fontSize="30px" fontWeight="550" ml="90px">
            Welcome <br />
          </Heading>
          <Text ml="85px" mt="2px" mb="40px">
            Enter your details here..
          </Text>

          <Formik
            initialValues={initialValue}
            validationSchema={validateForm}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <br />
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <br />
                <Button
                  variant={"solid"}
                  background="blue.500"
                  color="white"
                  type="submit"
                  mt="2px"
                  mb="5px"
                  w="100%"
                >
                  Login
                </Button>
                <Text></Text>
              </Form>
            )}
          </Formik>

          <Button
            variant={"solid"}
            background="red.500"
            color="white"
            type="button"
            mt="2px"
            mb="5px"
            w="100%"
            onClick={() => dispatch(regStatus()) }
          >
            New user ? SignUp for free
          </Button>
        </Box>
      {/* ) : (
        <SignUp />
      )} */}
    </>
  );
};

export default Login;
