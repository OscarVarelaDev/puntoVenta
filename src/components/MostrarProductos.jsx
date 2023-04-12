import {useEffect} from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoActions'

const MostrarProductos = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const cargarProductos = () => dispatch(obtenerProductosAction())
        cargarProductos()
    }, [])

const productos = useSelector(state => state.productos.productos)

  return (
    <Table striped bordered hover>
    <thead>
      <tr>

        <th>Nombre </th>
        <th>Precio</th>
        <th>Categoria</th>
        <th>Comentarios</th>
        <th>Preview</th>
        <th>Acciones</th>
  
      </tr>
    </thead>
    <tbody>
      {productos.length === 0 && 'No hay productos' }
      { productos.length > 0 && (
            productos.map(producto => (
                <tr key={producto._id}>
                    <td>{producto.name}</td>
                    <td>{producto.price}</td>
                    <td>{producto.categorias}</td>
                  
                    <td>{producto.comentarios}</td>
                    <td><img style={{ width: '50px',height: '50px' }}  src={producto.imgURL} alt="" /></td>
                    <td>
                        <Link to={`/productos/editar/${producto._id}`} className="btn btn-primary mr-2">Editar</Link>
                        <Link to={`/productos/eliminar/${producto._id}`} className="btn btn-danger mr-2">Eliminar</Link>
                        </td>
                </tr>
            ))
        )
      }
    </tbody>
  </Table>
  )
}

export default MostrarProductos