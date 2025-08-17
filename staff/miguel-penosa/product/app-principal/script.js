// Registro
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json())
        .then(data => {
            console.log('Registro exitoso:', data);
            alert('Usuario registrado. Ahora inicia sesión.');

            // Oculta el registro y muestra el login
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('loginTitle').style.display = 'block';
        })
        .catch(err => console.error('Error en registro:', err));
});

// Login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:8080/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json())
        .then(data => {
            console.log('Login exitoso:', data);
            alert('Login correcto');
            // Aquí podrías redirigir o mostrar datos
        })
        .catch(err => console.error('Error en login:', err));
});