import { 
        Container, 
        Heading ,
        Button ,
        FormControl ,
        Input,
        HStack,
      } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Messagebox() {
const [message , setMessage] = useState('');
const [topic , setTopic] = useState('');

console.log(topic);
  


const handleSubmit = async (e : any) => {
  e.preventDefault()
  console.log('----message' , message);
  // const  data = {
  //   message = message,
  //   // name = token.name  name should be taken form user
  // }
  // await axios.post('http://localhost:3333/message', data)

}

  return (
    <Container
    minWidth='80%'
    border = 'solid 0 black'
    height='85vh'
    margin= '5% auto'
    justifyContent = 'center'
    shadow='2xl'
    >
      <Heading as='h4' size='md' p='1'>Group Note's</Heading>
      <Container
        border = 'solid 0.2px grey'
        height = '70vh'
        // margin-top = '0px'
        margin = 'auto'
        justifyContent= 'center'
        overflow = 'auto'
        pt ='2'
      >
      {/*Messgage div*/}
        <Container
        border = 'solid 0.1px black'
        margin = '2px auto'
        min-height = '5vh'
        border-radius = '4px'
        background-color = '#7b8282'
        p ='1'
        >
         <p><span><b>Dhruv </b></span>: is typingk hkjlh lkh hoijo uh l;lj lj plg if fk fjgjhgjgjhgj j gj kgkjgkjg </p>           
        </Container>
        
      </Container>
      <Container
        border = 'solid 0.2px black'
        height = '9vh'
        justifyContent = 'space-between'
        p='0'
      >
      <form onSubmit={handleSubmit}>
        <FormControl m = '1' p ='1'>
          <HStack>
            <Input w='25%' position='relative' display='inline-block' id='topic' type='text' placeholder='Topic'  onChange = {event  =>setTopic(event.currentTarget.value)}/>
            <Input  id='message' type='text' placeholder='Message'  onChange = {event  => setMessage(event.currentTarget.value)}/>
            <Button  type='submit'>Send</Button>
           </HStack>
        </FormControl>
       </form> 
      
     
      </Container>

    </Container>
  )
}
