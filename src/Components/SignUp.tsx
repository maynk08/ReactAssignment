import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

type formData = {
  fname: string;
  lname: string;
  email: string;
  password: string;
};

const initialValue: formData = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

const validateForm = Yup.object().shape({
  fname: Yup.string().required("First name is missing"),
  lname: Yup.string().required("Last name is missing"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is missing"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      "Password must be 8-16 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

const SignUp = () => {
  const toast = useToast();
  const handleSubmit = (values: formData) => {
    const data = localStorage.setItem("userInfo", JSON.stringify(values));
    toast({
      title: "Registration successful",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });

    console.log(data);
  };

  return (
    <>
      <Box
        w="35%"
        mt="40px"
        ml="50px"
        h="510px"
        pt="3px"
        borderRight="1px solid grey"
        pr="80px"
      >
        <Heading fontSize="30px" fontWeight="550" ml="110px">
          Welcome <br />
        </Heading>
        <Text ml="90px" mb="25px">
          Enter your details here..
        </Text>
        <Formik
          initialValues={initialValue}
          validationSchema={validateForm}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <FormControl isInvalid={!!errors.fname && touched.fname}  mb='5px'>
                <FormLabel fontSize='sm'>First Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  name="fname"
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.fname}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.lname && touched.lname}  mb='5px'>
                <FormLabel fontSize='sm'>Last Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  name="lname"
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                 />
                <FormErrorMessage>{errors.lname}</FormErrorMessage>
              </FormControl>
            
              <FormControl isInvalid={!!errors.email && touched.email}  mb='5px'>
                <FormLabel fontSize='sm'>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password && touched.password}  mb='5px'>
                <FormLabel fontSize='sm'>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password must be of 8+ characters"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <Button
                variant={"solid"}
                background="blue.500"
                color="white"
                type="submit"
                mt="4px"
                w="100%"
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default SignUp;
