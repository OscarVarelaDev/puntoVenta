import React from 'react'
import { Button } from 'react-bootstrap'
const Boton = ({children,text}) => {
  return (
   <Button variant={children}>{text}</Button>

  )
}

export default Boton