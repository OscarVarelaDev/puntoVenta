
const sendUpdate = (data) => {
    fetch("http://localhost:3001/api/users/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.status === 200) {
                setText("Rol actualizado con exito, redireccionando...")
                setValid(true)
                setTimeout(() => {
                    setMostrar(false)

                }, 3000);
            }
            console.log(data.status)
            if (data.status !== 200) {
                setText("Error al actualizar el rol")
                setValid(true)
            }
        })
}

export default sendUpdate