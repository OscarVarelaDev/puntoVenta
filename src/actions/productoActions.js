import {
    DESCARGAR_PRODUCTOS,
    DESCARGAR_PRODUCTOS_EXITO,
    DESCARGAR_PRODUCTOS_ERROR,

    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR




} from '../types/index'
import clienteAxios from '../config/axios'

export function nuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(agregarProducto())
        try {
            dispatch(agregarProductoExito())
        } catch (error) {
            dispatch(agregarProductoError(true))
        }
    }
}

// Crear nuevos productos
export function obtenerProductosAction() {

    return async (dispatch) => {
        dispatch(descargarProductos())
        try {
            dispatch(descargarProductosExito())
        } catch (error) {
            dispatch(descargarProductosError(true))
            console.log(error)
        }
    }
}

const descargarProductos = () => ({
    type: DESCARGAR_PRODUCTOS,
    //es la parte que modifica el state
    payload: true
})
const agregarProducto = () => ({

    type: AGREGAR_PRODUCTO,
    payload: true
})

// si obtenemos los produvtos
const descargarProductosExito = () => ({
    type: DESCARGAR_PRODUCTOS_EXITO,
    //es la parte que modifica el state
    payload: true
})

const agregarProductoExito = () => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: true
})


const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

const descargarProductosError= estado =>({
    type:DESCARGAR_PRODUCTOS_ERROR,
    payload:estado
})

