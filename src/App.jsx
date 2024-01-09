import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Products from './assets/Products'
import Form from './assets/Form'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App