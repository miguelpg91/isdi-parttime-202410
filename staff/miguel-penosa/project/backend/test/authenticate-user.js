fetch('http://localhost:4000/api/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"email":"peeeeterpan@neverland.com","password":"aa12345678"}'
})
    .then(res => {
        const { status } = res

        if (status === 200)
            return res.json()
                .then(body => console.log('OK', status, body))


        return res.json()
            .then(body => console.log('KO', status, body))
    })
    .catch(error => console.error(error))