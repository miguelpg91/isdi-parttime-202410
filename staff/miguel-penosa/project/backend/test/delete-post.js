fetch('http://localhost:4000/api/posts/68e2c19609c38ee197f7a19b', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OGUxYzAxNzIxMzZkNmVkN2U5ODc2MjgiLCJpYXQiOjE3NTk2MjUyMzl9.aOxTjBHJdHk7lTPAQVg5DkW01sH4UL-QJWUNlGjHG2s'
    }

})

    .then(res => res.json().then(body => ({ status: res.status, body })))
    .then(({ status, body }) => {
        if (status <= 200 && status < 300) {
            console.log('OK', status, body)
        } else {
            console.log('KO', status, body)
        }
    })
    .catch(error => console.error(error))