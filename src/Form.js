import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  &{
    max-width:800px;
    margin:1em;
    padding:0.6em;
    color:white;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    border: 2px solid white;
    border-radius: 10px;
    font-family: 'InYourFace';
    font-size:2em;
    display:flex;
    flex-direction:column;
  }
`
const Title = styled.h1`
  &{
    color: yellow;
    margin: 0;
  }
`
const StyledInput = styled.input`
  &{
    border-radius:10px;
    margin: 1px 0.5em;
    padding: 0.5em 1em;
    color:white;
    border:2px solid white;
    background-color:rgba(0,0,0,0.2);
    font-family:"VCR OSD Mono";
    font-size:0.6em;
    width: 5em;

  }
`

const StyledButton = styled.button`
  &{
    border-radius: 10px;
    border: 2px solid white;
    padding: 0.2em 1em;
    font-size:1.2em;
    color:lime;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    font-family: "InYourFace"
  }

  
`

const Message = styled.p`
&{
  color: red;
  font-size:1.4rem;
  font-family:'VCR OSD Mono';
  margin:0;
  margin-top:1rem;
}`

const Row = styled.div`
&{
  display:flex;
  flex-direction:row;
  align-items: center;
  flex-wrap: wrap;
}`

const Col = styled.div`
&{
  display:flex;
  flex-direction:column
}`

const StyledLink = styled.a`
&{
  font-family:'InYourFace';
  color:white;
}
`

export default props => (
  <Container>
    <Title>Among Us Calculator</Title>
    <StyledLink href='https://store.steampowered.com/app/945360/Among_Us/' target="_blank" rel="noopener noreferral">Current Price of 1 copy: ${props.price}</StyledLink>



    <form onSubmit = {props.handleSubmit}>
      <Col>
      <Row>
      <label>
        How many copies of Among Us can $
      </label>
      <StyledInput type="number" name="value" value ={props.value} onChange={props.handleOnChange}/>
      <label>
        buy?
      </label>
      </Row>
      <Row style={{alignItems: "center", marginTop:'1em'}}>
      <StyledButton onClick={props.handleSubmit} >Calculate</StyledButton>
        <p style={{fontFamily:'VCR OSD Mono', margin: '0em 0.5em 0em 1em', fontSize:'0.6em'}}>Unlimited rendering? </p>
        <input type="checkbox"  onClick={props.handleToggle}/>
      </Row>
      </Col>
      
      
    </form>

    <Message>{props.message} by purchasing {(props.count === 0 ? "more" : props.count)} copies of among us.</Message>
  </Container>


)