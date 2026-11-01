const formulario = document.getElementById("formContacto");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
    event.preventDefault();
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorMensaje").textContent = "";
    document.getElementById("errorGeneral").textContent = "";

    let formularioValido = true;
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        document.getElementById("errorNombre").textContent =
            "Por favor, dime a quién debo dirigirme cuando responda a tu mensaje.";
        formularioValido = false;
    }
    const email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("errorEmail").textContent =
            "Por favor, dime a dónde debo enviar la respuesta.";
        formularioValido = false;
    } else if (!email.includes("@")) {
        document.getElementById("errorEmail").textContent =
            "El correo electrónico que me has proporcionado no es válido.";
        formularioValido = false;
        } else if (!email.includes(".")) {
        document.getElementById("errorEmail").textContent =
            "El correo electrónico que me has proporcionado no es válido.";
        formularioValido = false;
    }

    // Mensaje
    const mensaje = document.getElementById("mensaje").value.trim();

    if (mensaje === "") {
        document.getElementById("errorMensaje").textContent =
            "Por favor, dime, ¿qué me quieres decir?.";
        formularioValido = false;
    }
    if (formularioValido) {
        document.getElementById("resultado").textContent =
            "¡Gracias por contactar con nosotros! En breve recibirás una respuesta.";
    }
}
function enviarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    console.log(nombre);
    console.log(email);
    console.log(mensaje);
    document.getElementById("resultado").textContent =
        "Gracias por contactar. Hemos recibido tu mensaje.";
}

document.getElementById("formContacto")
    .addEventListener("submit", enviarFormulario);