
async function handleLogin() {
    console.log('Attempting automatic login...');

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");

    email.value = "culaspero@gmail.com";
    password.value = "bagongpassword";

    loginBtn.click();

    try {
        const errorMessage = await waitForError('.alert_danger');

        console.error('Login failed:', errorMessage);
        alert('Invalid credentials: ' + errorMessage);

    } catch (error) {
        console.log(error.message);
    }
}

console.log("Welcome to PMFTCI College Login");
handleLogin();