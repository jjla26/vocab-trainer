import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home.jsx'
import Practice from './components/Practice.jsx'
import Admin from './components/Admin.jsx'


function App() {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/practice" Component={Practice}/>
      <Route path="/admin" Component={Admin}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App