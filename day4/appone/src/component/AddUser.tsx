import React, { useState } from 'react'
import axios from 'axios'

import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  Flex,
  Stack,
  Heading,
  Box,
  InputGroup,
  InputLeftElement,
  Switch
} from '@chakra-ui/react'
import { useNavigate  } from "react-router-dom";



export default function AddUser() {
const navigate = useNavigate();
  const [name, setNamme] = useState('');
  const [password, setPassword] = useState('');


  const [cname, setCnamme] = useState('');
  const [cpassword, setCpassword] = useState('');


  const checkUser = async (e: any)=>{
    e.preventDefault();
    const data ={
        "username" : cname,
        "password" : cpassword
    }
    
    const res = await axios.post('http://localhost:3333/auth/login', data);
    const token = res.data.access_token
    
    localStorage.setItem('access_token' , JSON.stringify(token))
    navigate("/")
  }

  const sendUserData = async (e : any) => {
    e.preventDefault()
    const data = {
      name: name,
      password : password
    }
    console.log("---input---", data);

    await axios.post('http://localhost:3333/user', data)
  }
 const [change , setChange] = useState(false)

  
  return (
    
      <Container>
          <FormControl display='flex' alignItems='center'>
              
            <FormLabel htmlFor='form-switch' mb='0'>
                Login
            </FormLabel>
            <Switch id='form-switch' onChange={(e) => setChange(!e.currentTarget.value)}  />
            <FormLabel htmlFor='form-switch' mb='0' p='1'>
                SingnUp
            </FormLabel>
            </FormControl>
            <Flex
             flexDirection="column"
             width="100wh"
             height="50vh"
             backgroundColor="gray.200"
             justifyContent="center"
             alignItems="center" 
            >
                <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center">
                    
                    <Heading color="teal.400">Welcome</Heading>
                    <Box  minW={{ base: "90%", md: "468px" }}>
                        {change?
                        
                    <form onSubmit={sendUserData}>
                        <Heading color="grey.200" size='md' pb='2'>SingUp</Heading>

                        <Stack
                        spacing={4}
                        p="1rem"
                        backgroundColor="whiteAlpha.900"
                        boxShadow="md"
                        >
                        <FormControl>
                            <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                
                            />
                            <Input type="text" placeholder="Name"
                            onChange={event => setNamme(event.currentTarget.value)} 
                            />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                            />
                            <Input
                                type="text"
                                placeholder="Password"
                                onChange={event => setPassword(event.currentTarget.value)}
                            />
                        
                            </InputGroup>
                        </FormControl>
                        <Button
                            borderRadius={0}
                            type="submit"
                            variant="solid"
                            colorScheme="teal"
                            width="full"
                        >
                            Login
                        </Button>
                        </Stack>
                    </form>
                        :
                        
                        <form onSubmit={checkUser}>
                        <Heading color="grey.200" size='md' pb='2'>Login</Heading>

                        <Stack
                        spacing={4}
                        p="1rem"
                        backgroundColor="whiteAlpha.900"
                        boxShadow="md"
                        >
                        <FormControl>
                            <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                
                            />
                            <Input type="text" placeholder="Name"
                            onChange={event => setCnamme(event.currentTarget.value)} 
                            />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                            />
                            <Input
                                type="text"
                                placeholder="Password"
                                onChange={event => setCpassword(event.currentTarget.value)}
                            />
                        
                            </InputGroup>
                        </FormControl>
                        <Button
                            borderRadius={0}
                            type="submit"
                            variant="solid"
                            colorScheme="teal"
                            width="full"
                        >
                            Login
                        </Button>
                        </Stack>
                    </form>
                     }
                    </Box>
                </Stack>

            </Flex>
      </Container>

      


  )
}
function acess_token(acess_token: any, arg1: string) {
    throw new Error('Function not implemented.');
}

