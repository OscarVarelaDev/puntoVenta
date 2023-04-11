import {
    DESCARGAR_PRODUCTOS,
    DESCARGAR_PRODUCTOS_EXITO,
    DESCARGAR_PRODUCTOS_ERROR,

    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR


} from '../types'

//cada reducer tiene su state
const initialState={
    productos:[],
    error:null,
    loading:false
}

export default function (state= initialState, action){

    switch(action.type){
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                productos:[...state.productos,action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case DESCARGAR_PRODUCTOS:
            return{
                ...state,
                loading:action.payload
            }
        case DESCARGAR_PRODUCTOS_EXITO:
            return{
                ...state,
                loading:false,
                error:null,
                productos:[...action.payload]
            }
        case DESCARGAR_PRODUCTOS_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}
