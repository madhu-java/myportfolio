import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {FaSun, FaMoon, FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
   const {colorMode, toggleColorMode} = useColorMode();
   const isDark = colorMode==="dark";
   
  return (
    <VStack p='5'>
      <Flex w='100%'>
        {/* <Heading 
        ml="2" size="md" fontWeight='semibold' color='cyan.400'>iam Madhu</Heading> */}
      
      <Spacer></Spacer>
      <IconButton icon = {<FaLinkedin/>} isRound='true' onClick={()=>window.open("http://www.linkedin.com/in/madhavi-r-566b441b0")}></IconButton>
      <IconButton ml={2} icon= {<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml={2} icon ={<FaGithub />} isRound='true' onClick={()=>window.open("https://github.com/madhu-java")}></IconButton>
      <IconButton ml={8} icon={isDark?<FaSun/>:<FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
      
      </Flex>
      
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
