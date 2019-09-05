import React from 'react';
import {useSpring, animated} from 'react-spring';



function Home(){
    const props = useSpring({
        opacity:1,
        from: {opacity:0}
    })


    return (
    <div className="container-fluid">
        <animated.h1 style={props} onMouseOver={()=>console.log("hi")}>Hi</animated.h1>
        <button onClick={()=>props.opacity.value}>Click me</button>
    </div>
    );
}
 
export default Home;