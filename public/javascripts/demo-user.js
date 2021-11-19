window.addEventListener('DOMContentLoaded', () => {
    const demoButton = document.querySelector('#demo-button');
    console.log('hi')
    demoButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        email.setAttribute('value', 'demouser@demouser.com');
        password.setAttribute('value', 'DemoUser@123');
        const login = document.getElementById('login-button');
        const evt = new MouseEvent('click');
        login.dispatchEvent(evt);
    });
});