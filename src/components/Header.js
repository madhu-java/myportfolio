import { Box, Button, Circle, Flex, Image, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
    const {colorMode} = useColorMode();
    const isDark = colorMode ==='dark';
    const {isNotSmallerScreen} =  useMediaQuery("(min-width=600px)");
  return (
      <Stack>
          {/* <Circle position='absolute' bg='red.500' opacity='0.1' width ='100px' height ='100px' alignSelf='flex-end'/> */}
          <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
           <Flex direction={isNotSmallerScreen?"row":"column"} spacing="200px" p={isNotSmallerScreen?"32":"0"}
           alignSelf="flex-start">
               <Box  mt = {isNotSmallerScreen?"0":16} align='flex-start'>
               <Text fontSize= "5xl" fontWeight="semibold">Hi, i am </Text>
               <Text fontSize="7xl" fontWeight= "semibold" bgGradient="linear(to-r, green.300,green.500,green.800)" bgClip="text">Madhavi Rontala</Text>
                <Text color={isNotSmallerScreen?'gray.100':'gray.500'} >Software Developer(HTml5, CSS3, React, Java, MySQL), Customer Representative,Yoga Teacher </Text>          
                <Button mt={8} colorScheme="blue" onClick={()=>
                window.open("https://docs.google.com/document/d/1tFkXvLIfXGV1z8cDiUYQp2qFLZFyWCFM/edit?usp=sharing&ouid=103895248600648240445&rtpof=true&sd=true")}            
                >Hire me</Button>
               {/* //test */}
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen?"0":"12"} mb = {isNotSmallerScreen?"0":"12"} borderRadius="full"
                backgroundColor="transparant" boxShadow="lg" boxSize="300px" src="https://drive.google.com/uc?id=1zktwO5NM7GXhSLnt0NbrxoQTs0AvY3kD" />
             
                     
            </Flex>     
            
      </Stack>
    // <div>Hello</div>
  )
  
}
