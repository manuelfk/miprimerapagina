function showAlert() {
    alert("¡Hola, esta es una alerta desde JavaScript");
}

//Oyente de evento para el formulario para manejar el evento "submit"//
const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
});

//sumamos una funcion de validacion para verificar los criterios deseados//
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (!validateEmail(email)) {
        alert("Por favor ingrese un correo electrónico válido.");
    } else {
        alert("Correo electrónico enviado correctamente.");
    }
}
//barra de navegacion responsive//
document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})