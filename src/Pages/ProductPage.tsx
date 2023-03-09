import { useLocation } from 'react-router-dom'
import {Box,Image,Text,Heading} from '@chakra-ui/react'
import Nav from '../Components/Nav'

const ProductPage = () => {
    const location = useLocation()
    console.log(location)
    const data = location.state
   // console.log(data)

  return (
    <>
    <Nav/>
    <Box bg='white' h='60%' mt='5em' ml='18em' w='60%' border='2px solid white' borderRadius='20px' display='flex'>
    <Box w='40%' borderRight='2px dotted grey' m='20px'  >
      <Image src={data.image} h='355px' w='80%' ml='5%' mt='5%'  />
    </Box>
  
    <Box w='50%' ml='1em' mt='30px' pt='10px' display='flex' h='85%' flexDirection='column' borderRadius="50px">
      <Box bg='indigo' h='50px' borderRadius='50px' textAlign='center' mt='5px' pt='10px'>
      <Text fontSize='lg' fontWeight='700' color='white'>{data.title}</Text>
      </Box>
  
      <Box borderRadius='40px' mt='10px' mb='10px' w='100%' h='250px' border= '1px solid grey' textAlign='left' p='25px'>
      <Text color='black' fontSize='md' fontWeight='400' mb='20px'>{data.description}</Text>

      <Text>⭐⭐⭐⭐({data.rating})</Text>
      </Box>

      <Box borderRadius='40px' mt='5px' bg='indigo' w='md' h='50px' display='flex' justifyContent='center' alignItems='center' pl='10px'>
      
     
      <Text color='white' fontSize='md'>${data.price}</Text>
      </Box>
     
    </Box>
  </Box>
  </>
  
  )
}

export default ProductPage
