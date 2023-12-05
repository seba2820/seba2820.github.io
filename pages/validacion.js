document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        var isValid = true;

        // Validación del campo nombre
        var nombre = document.getElementById('nombre');
        if (!nombre.value.trim()) {
            alert('Por favor, ingresa tu nombre.');
            isValid = false;
        }

        // Validación del campo email
        var email = document.getElementById('email');
        if (!email.value.trim() || !isValidEmail(email.value.trim())) {
            alert('Por favor, ingresa un correo electrónico válido.');
            isValid = false;
        }

        // Validación del campo mensaje
        var mensaje = document.getElementById('mensaje');
        if (!mensaje.value.trim()) {
            alert('Por favor, ingresa tu mensaje.');
            isValid = false;
        }

        // Desactivar la validación 'required' de los campos
        if (isValid) {
            nombre.removeAttribute('required');
            email.removeAttribute('required');
            mensaje.removeAttribute('required');
        } else {
            // Evitar que se envíe el formulario si la validación no es exitosa
            event.preventDefault();
        }
    });

    // Función para validar el formato del correo electrónico
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});