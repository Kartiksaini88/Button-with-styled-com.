import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button1, Button2, Button3, Button4, Button5 } from './components/button-component'

function App() {
  const [theme, chngtheme] = useState("light")
  let [dash , setdash]=useState("dash")
  let [text , settext] = useState("black")
  let [defaul , setdefault] = useState("border")

  return (
    <div className="App">
      {/* <h3>Theme : {theme}</h3>
      <Button 
      theme={theme}
      onClick={()=>{chngtheme(theme==="light"?"dark":"light")}}>
        Primary Button
      </Button>

      <Button id="daash"
      dash={dash}
      onClick={()=>{setdash(dash==="dash"?"none":"dash")}}>Dashed Button</Button>
      <Button
      text={text}
      onClick={()=>{settext(text==="black"?"border":"black")}}>Text button</Button>
      <Button
      defaul={defaul}
      onClick={()=>{setdefault(defaul==="border"?"none":"border")}}>Default Button</Button> */}

      <Button1 name='primary'>Primary Button</Button1>
      <Button2 name="default">Default</Button2>
      <Button3 name="dash">Dashed Button</Button3>
      <Button4 name="none">Text Button</Button4>
      <Button5 name="none">Link Button</Button5>
    </div>
  )
}

export default App
