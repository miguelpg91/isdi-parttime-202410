fetch("http://localhost:8080/users/auth", {     /// fetch:  para realizar solicitudes HTTP de forma nativa//url: endpoint
    method: "POST",     ///metodo HTTP: POST indica que el cliente envía datos al servidor para realizar una operación (en este caso, autenticar
    headers: {
        "Content-Type": "application/json"
    }
    body: '{"username": "peterpan", "password": "123123123"}'       //datos enviados al server: JSON como cadena de texto
})

    .then(res => {      //then: Maneja la respuesta del servidor cuando la solicitud se completa con éxito //res: Representa el objeto de respuesta HTTP
        const { status } = res

        if (status === 200)         ///Si es exitoso, se procesa el cuerpo de la respuesta
            return res.json()       ///Convierte el cuerpo de la respuesta (que viene como texto en formato JSON) a un objeto de JavaScript.
                .then(body => console.log("OK", status, body))      ///body: Contendrá los datos devueltos por el servidor.


        return res.json()
            .then(body => console.log("KO", status, body))
    })

    .catch(error => console.error(error))



///no estamos en la API, sino simulando un cliente que envía credenciales (username, password) hacia la API que vive en el servidor (http://localhost:8080/users/auth).