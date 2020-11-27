import React, {useState} from  'react';
import Form from './Form.js'
import styled from 'styled-components';
import AnimationLayer from './AnimationLayer'


const Background = styled.div`
&{
  background-color:black;
  background: url("https://i.redd.it/2obw9yylddr51.jpg") repeat fixed center;
  background-size: 25% ;
  color:white;
  height:100vh;
  width:100vw;  
  margin: 0;
  padding: 0;
  display:flex;
  overflow: hidden;
  position: absolute;
}
`
const FooterLink = styled.a`
  &{
    
  }
`

export default ()=>{
  const [value, setValue] =useState(0);
  const [count, setCount] = useState(0);
  const [rendered, setRendered] = useState(false);
  const [unlimited, toggleUnlimited] = useState(false);
  const [message, setMessage] = useState("See what you can do")

  const messages=[
    "You can evade the IRS",
    "You can own a small island",
    "You can get rid of dirty money",
    "You can command a small army",
    "You can become the president"
  ]  

  const price = 4.99;



  const handleSubmit = (e) => {
    if(e){
      e.preventDefault();
    }
    if(value === 0){
      alert("You should probably enter a number first.")
    }
    setRendered(false);
    setCount(Math.round(value/price));
    setMessage(messages[Math.floor(Math.random()*(messages.length))])
  }
  const handleToggle = (e) => {
    e.persist();
    toggleUnlimited(!unlimited)

  }

  const handleOnChange = (e) => {
    e.persist();
    setValue(e.target.value);
   
  }
  return (
    <Background >
      <AnimationLayer 
        style={{width: '10px', zIndex:'999'}} 
        num = {count}
        unlimited={unlimited}
        rendered = {rendered}
        setRendered = {setRendered}
        ></AnimationLayer>
      <Form
        price = {price}
        value={value}
        count={count}
        message={message}
        handleToggle={handleToggle}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
      />
    </Background>
  )
}