import Layout from './views/Layout'
import Login from './views/Login'
import Register from './views/Register'
import OlvidePassword from './views/OlvidePassword'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   
   <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="inicio" element={<h1>Inicio</h1>}/>
          <Route path="ventas" element={<h1>Ventas</h1>}/>
          <Route path="catalogo-productos" element={<h1>Catalogo de Productos</h1>}/>
          <Route path='productos' element={<h1>Productos</h1>}/>
          <Route path='productos/:id' element={<h1>Productos</h1>}/>
          <Route path="contacto" element={<h1>Contacto</h1>}/>
          <Route path="registro" element={<Register/>}/>
          <Route path="iniciar-sesion" element={<Login/>}/>
          <Route path='contacto' element={<h1>Contacto</h1>}/>
          <Route path='olvide-password' element={<OlvidePassword/>}/>

      </Route>
    </Routes>
   
  
  )
}

export default App