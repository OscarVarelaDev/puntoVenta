import Layout from './views/Layout'
import Login from './views/Login'
import Register from './views/Register'
import OlvidePassword from './views/OlvidePassword'
import Configuracion from './views/Configuracion'
import Index from './views/Index'
import Catalogo from './views/Catalogo'
import { Route, Routes } from 'react-router-dom'
  

//Redux
import { Provider } from 'react-redux'
import store from './store'
import Productos from './views/Productos/Productos'

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="catalogo-productos" element={<Catalogo />} />
          <Route path='productos' element={<Productos />} />
          <Route path='productos/:id' element={<h1>Productos</h1>} />
          <Route path="contacto" element={<h1>Contacto</h1>} />
          <Route path="registro" element={<Register />} />
          <Route path="iniciar-sesion" element={<Login />} />
          <Route path='contacto' element={<h1>Contacto</h1>} />
          <Route path='olvide-password' element={<OlvidePassword />} />
          <Route path='configuracion' element={<Configuracion />} />
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>} />

      </Routes>
    </Provider>



  )
}

export default App