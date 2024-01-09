import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Products from './assets/Products.jsx'
import Form from './assets/Form.jsx'

function App() {

  return (
    <>
    <h1>app</h1>
      <BrowserRouter>
      <Routes>
  <Route path="/Products" element={<Products />} />
  <Route path="/Form" element={<Form />} />
</Routes>

          
      </BrowserRouter>
    </>
  )
}

export default App