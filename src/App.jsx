import { useState } from 'react'
import Login from "./pages/login/Login";
import Home from "./pages/home/Home"


function App() {
 const [auth,setAuth] = useState(false);
  return (
    <div className="app__container">
     {
       auth ? <Home setAuth={setAuth}/> : <Login setAuth={setAuth}/>
     }
     </div>
  )
}

export default App
