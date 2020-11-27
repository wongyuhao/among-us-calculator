import React from 'react';
import {useSpring, animated} from 'react-spring';
import {ReactSVG} from 'react-svg'

const AnimatedSVG = animated(ReactSVG);

export default (props) => {
  const animation = useSpring({
    reset:true,
    to:{
      transform:'translateX(110vw) rotateZ(720deg)'
    },
    from:{
      transform:`translateX(${props.left}vw) rotateZ(${props.left*2}deg)`
    },
    config: {
      duration: 60 * (120-props.left)
     },
  })
 

  return (
    <animated.div style={{position: 'absolute',top: `${props.top}vh`}}>
  <animated.div style={{height:'100px', width:'100px', ...animation, }}>
    <AnimatedSVG  
      beforeInjection={(svg) => {
        svg.setAttribute('style', 'height: 100px')
        svg.setAttribute('style', 'width: 100px')
      }} 
      src = {props.src}/>
  </animated.div>
  </animated.div>
  )
  
}
