import { Alert } from "react-bootstrap"

const Alerta = ({text,variant}) => {
  return (
    <Alert style={{ textAlign: "center" }} variant={variant}>{text}</Alert>

  )
}

export default Alerta