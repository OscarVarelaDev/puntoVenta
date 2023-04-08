import { Alert } from "react-bootstrap"

const Alerta = ({text}) => {
  return (
    <Alert style={{ textAlign: "center" }} variant={text === "Debe seleccionar un rol valido" ? "danger" : "success"}>{text}</Alert>

  )
}

export default Alerta