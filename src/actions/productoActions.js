import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,

    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,


} from '../types';  //importamos los types
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
//crear nuevos productos

export function crearNuevoProductoAction(nuevoProducto) {
      return async(dispatch)=>{
        dispatch( agregarProducto())
        try {
             dispatch( agregarProductoExito(nuevoProducto))
          await  clienteAxios.post('/productos',nuevoProducto)
          Swal.fire(
            'Correcto',
            'El producto se agrego correctamente',
            'success'

          )

        } catch (error) {
            dispatch( agregarProductoError(true))
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
                })
        }
   
        
      }
    
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})
//Si el porducto se guarda en la base de datos
const agregarProductoExito = nuevoProducto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: nuevoProducto
})
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//funcion que descarga los productos de la base de datos
export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch( descargarProductos() )
        try {
            const respuesta = await clienteAxios.get('/productos')
            dispatch( descargarProductosExito(respuesta.data))
        } catch (error) {
            console.log(error)
            dispatch( descargarProductosError())
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
const descargarProductosExito = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})
const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})





