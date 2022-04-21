

import { useEffect, useState } from 'react'
import './App.css'
import { Button } from 'antd';
// import { Button } from './components/Button'
import { Flex } from './components/Flex'

function App() {


const [theme,setTheme]=useState("dark")
  return (
    <div className="App">
  
     <h3>Theme:{theme}</h3>
    <Button className="btn" type="primary">Primary Button</Button>
    <Button className="btn">Default Button</Button>
    <Button className="btn" type="dashed">Dashed Button</Button>
    <br />
    <Button className="btn" type="text">Text Button</Button>
    <Button className="btn" type="link">Link Button</Button>
    </div> 
    // <div className="App">
    
    //  <h3>Theme:{theme}</h3>
    // <Button  theme={theme} onClick={()=>{}}>Primary</Button>   
  
    // <Button onClick={()=>{
    //   alert ("clicked for Click ME")
    // }}children ={"Default"}/>

    // <Button children ={"Sign in"}/>
    // <Button onClick={()=>{
   

    //   setTheme(theme==="light"? "dark":"light")  //unary operator
    // }}>Sign Out</Button>

    // <Button  theme={theme}
    //   variant="hollow"
    //   onClick={()=>{
    //  alert("clicked primary button")
    // }}>Primary</Button>
    
    // </div>

  )
 }

export default App
