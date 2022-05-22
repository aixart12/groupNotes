import React, { useState } from 'react'
import axios from 'axios'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Center,
  Container,
  Button,
} from '@chakra-ui/react'

export default function AddUser() {
  const [name, setNamme] = useState('');
  const [food, setFood] = useState('');
  const [age, setAge] = useState('');






  const sendUserData = async (e : any) => {
    e.preventDefault()
    const data = {
      name: name,
      food: food,
      age: +age
    }
    console.log("---input---", data);

    await axios.post('http://localhost:3333/user', data)

  }


  const isError = name === ''
  return (
    <Container
      border="solid 0.2px"
      display='flex'
      alignItems='center'
      margin='auto'
      width='min(600px, 80%)'
    >
      <form onSubmit={sendUserData}>
        <FormControl isInvalid={isError} >
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            id='name'
            type='text'
            onChange={event => setNamme(event.currentTarget.value)}
          />
          <FormLabel htmlFor='food'>Food</FormLabel>
          <Input
            id='food'
            type='text'
            onChange={event => setFood(event.currentTarget.value)}
          />

          <FormLabel htmlFor='age'>Age</FormLabel>
          <Input
            id='age'
            type='text'
            onChange={event => setAge(event.currentTarget.value)}
          />
          <Button padding="5px" margin="8px auto" colorScheme='blue' type='submit'>Submit</Button>
        </FormControl>
      </form>
    </Container>
  )
}
