document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    const correctUsername = 'demo1';
    const correctPassword = 'skills2023d1';

    const correctUsername2 = 'demo2';
    const correctPassword2 = 'skills2023d2';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = '../AAAAAAAAAa/aaa.html'; 
    }else if(username === correctUsername2 && password === correctPassword2){
        window.location.href = '../AAAAAAAAAa/aaa.html'
    }else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});






















