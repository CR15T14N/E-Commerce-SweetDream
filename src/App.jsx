import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import { ProductsContextProvider } from './context/ProductsContext'

function App() {

  return (
    <BrowserRouter>
    <ProductsContextProvider>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cart' element={<h3>coming soon</h3>}>{""}</Route>
      <Route path='/products' element={<ProductsList />} ></Route>
      <Route path='*' element={<h3>Ruta inexistente</h3>}></Route>
    </Routes>
    </ProductsContextProvider>
    </BrowserRouter>
  )
}

export default App
