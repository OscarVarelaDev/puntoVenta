import { createContext } from "react";
import { useEffect } from "react";

const ProductosContext = createContext();
const ProductosProvider=({children})=>{

const getProducts= async () => {
    
    const url='https://api-token-products.onrender.com/api/products'
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}
    return (
        <ProductosContext.Provider value={{getProducts }}>
            {children}
        </ProductosContext.Provider>
    )
}

export {
    ProductosProvider
}
export default ProductosContext
