import { 
        Container, 
        Heading ,
        Button ,
        FormControl ,
        Input,
        HStack,
        Text,
      } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useNavigate  } from "react-router-dom";

export default function Messagebox() {
  const navigate = useNavigate();
const [message , setMessage] = useState('');
const [topic , setTopic] = useState('');

const [user , setUser] = useState('')

const {isLoading , data} =  useQuery('allmsg' , async () =>{
  return await axios.get('http://localhost:3333/messages') } )



console.log(data)
if(isLoading) {
  return <h2>Loading</h2>
}

const logout = () =>{
  localStorage.removeItem("access_token")
  navigate('/adduser')

}

const handleSubmit = async (e : any) => {
  e.preventDefault()
  let token  = JSON.parse(localStorage.getItem('access_token') as unknown as string ) 
  
  await axios.get('http://localhost:3333/auth/profile',  
            { headers : {'Authorization':`Bearer ${token}`}}).then(res =>{
              console.log(res.data)
              setUser(res.data)
            }).catch(e => {
              console.log(e)
            })
     
            console.log("-------user-----" , user)
    const data = {
      name : user,
      message : message,
      topic : topic
    } 
    console.log(data)
  await axios.post('http://localhost:3333/messages', data)

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
         {
          data?.data.map((message : any ) =>{

        return (
          <Container key={message.id}
          border = 'solid 0.1px black'
          margin = '2px auto'
          min-height = '5vh'
          border-radius = '4px'
          background-color = '#7b8282'
          p ='1'
          >
        
            <p><span><b>{message.name} </b></span>:{message.message} <Text fontSize='xs'><i  >Date : {message.createdAt}</i></Text></p>         
              
          </Container>)
        })
      }
        
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
      <Container>
        <Button onClick={logout}>
          Logout
        </Button>
      </Container>

    </Container>
    
  )
}
