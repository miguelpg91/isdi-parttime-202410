fetch('http://localhost:4000/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{ "username":"miguel","email":"miguel@miguel.com","password":"nnnyyy12345678"}'
})

/// NODE_ENV=test npm start

/// node test/register-user.js