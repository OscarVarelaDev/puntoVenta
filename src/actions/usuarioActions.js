import clienteAxios from '../config/axios'
import Swal from 'sweetalert2';
import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR,

} from '../types'

export function crearNuevoUsuarioAction (userRegister){
    return async(dispatch)=>{
        dispatch(agregarUsuario())
        try {
             dispatch(agregarUsuarioExito())
            await clienteAxios.post("auth/signUp",
            JSON.stringify(userRegister)
          )
            Swal.fire(
                'Correcto',
                'El usuario se agrego correctamente',
                'success'
    
              )
        }
        catch (error) {
            console.log(error)
            dispatch(agregarUsuarioError(true))
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
                })
        }
        }
    }




//funciones para crear nuevos usuarios

const agregarUsuario = () => ({
    type: AGREGAR_USUARIO,
    payload: true
})
//Si el usuario se guarda en la base de datos
const agregarUsuarioExito = nuevoUsuario => ({
    type: AGREGAR_USUARIO_EXITO,
    payload: nuevoUsuario
})
const agregarUsuarioError = estado => ({
    type: AGREGAR_USUARIO_ERROR,
    payload: estado
})
