fetch('http://localhost:4000/api/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OGUxYzAxNzIxMzZkNmVkN2U5ODc2MjgiLCJpYXQiOjE3NTk2MjUyMzl9.aOxTjBHJdHk7lTPAQVg5DkW01sH4UL-QJWUNlGjHG2s'
    },
    body: '{"ciudad":"Madrid", "text":"Hola ....","precio":40000,"userId":"68e1c0172136d6ed7e987628","imagen":"http://example.com/terreno.jpg","tipo":"Industrial"}'
})

    .then(res => {
        const { status } = res

        if (status >= 200 && status < 300)
            return res.json()
                .then(body => console.log('OK', status, body))

        return res.json()
            .then(body => console.log('KO', status, body))
    })
    .catch(error => console.error(error))