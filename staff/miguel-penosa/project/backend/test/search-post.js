fetch('http://localhost:4000/api/posts/search?tipo=Industrial&ciudad=Barcelona&precio4000', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },            ////porque las llaves? 
    //  '{"tipo":"Urbano", "ciudad":"Alicante","precio":5000}'

})

    .then(res => res.json().then(body => ({ status: res.status, body })))
    .then(({ status, body }) => {
        if (status >= 200 && status < 300) {
            console.log('OK', status, body)
        } else {
            console.log('KO', status, body)
        }
    })
    .catch(error => console.error(error))



/// NODE_ENV=test npm start

/// node test/...js

/*
convierte la respuesta del servidor (texto JSON) a objeto JavaScript

crea un nuevo objeto con dos cosas: status: el código HTTP (200, 404, etc.) y body: el contenido ya convertido a objeto.

recibe ese objeto y lo desestructura para usar status y body

*/