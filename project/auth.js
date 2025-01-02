// auth.js

// ×¢²áÂß¼­
document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert('Registration successful!');
    window.location.href = 'login.shtml';
});

// µÇÂ¼Âß¼­
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
        alert('Login successful!');
        window.location.href = 'index.html';  // Ìø×ªµ½ÒÇ±íÅÌÒ³Ãæ
    } else {
        alert('Invalid credentials!');
    }
});