import React from "react";
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


type productCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
  rating: number;
};

const Products = ({
  title,
  description,
  price,
  image,
  rating,
}: productCardProps) => {
  title = title.length > 15 ? title.substring(0, 15) + "..." : title;
  description =
    description.length > 50
      ? description.substring(0, 50) + "..."
      : description;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  return (
    <>
      <Card w="310px" mt="30px" boxShadow="1px 1px 1px 0px grey">
        <CardBody>
          <Image
            src={image}
            mx="auto"
            alt="product image"
            borderRadius="lg"
            h="100px"
            objectFit="contain"
            boxSize="200px"
            maxH="300px"
            objectPosition="center"
          />
          <Stack mt="50px" spacing="5px">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
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
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="10px">
            <Button variant="solid" size="md">
              {<AiOutlineHeart />}
            </Button>
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="outline" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Products;
