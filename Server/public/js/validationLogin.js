window.addEventListener("load", function () {

    let formulario = document.getElementById("login");
    
    formulario.addEventListener("submit", function (e) {
        
        // Validacion campo email
        const campoEmail = document.getElementById("email");
        let array = campoEmail.value.indexOf("@",0);
        let campoE = document.getElementById("campoE");
            
        if(campoEmail.value == ""){
            e.preventDefault();
            campoE.innerHTML = "Debes completar este campo"
        } else if(array == -1){
            e.preventDefault();
            campoE.innerHTML = "Correo no válido";          
        } else {
            campoE.style.display = "none";
        }

        let campoPassword = document.getElementById("password");
        let campoP = document.getElementById("campoP");
        if(campoPassword.value == ""){
            e.preventDefault();
            campoP.innerHTML = "Debes completar este campo";
        } else if(campoPassword.value <= 8){
            e.preventDefault();
            campoP.innerHTML = "La contraseña debe contener minimo 8 carcteres";          
        } else {
            campoP.style.display = "none";
        }

        /* let campoEmail = document.getElementById("email");
        let array = campoEmail.value.indexOf("@", 0);
        if (array == -1 || campoEmail.value == "") {
            errores.push('email no valido');
        } */
        /* let campopassword = document.getElementById("password");
        var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
        function tiene_mayusculas(texto) {
            for (i = 0; i < texto.length; i++) {
                if (letras_mayusculas.indexOf(texto.charAt(i), 0) != -1) {
                    return true;
                }
            }
            return false;
        }
        var letras = "abcdefghyjklmnñopqrstuvwxyz";
        function tiene_minusculas(texto) {
            for (i = 0; i < texto.length; i++) {
                if (letras.indexOf(texto.charAt(i), 0) != -1) {
                    return true;
                }
            }
            return false;
        }
        var numeros = "0123456789";
        function tiene_numeros(texto) {
            for (i = 0; i < texto.length; i++) {
                if (numeros.indexOf(texto.charAt(i), 0) != -1) {
                    return true;
                }
            }
            return false;
        }
        var caracteres = "!|#$%&/()=?'¡¿+*~^,;.-_{}[]<>-"
        function tiene_caracteres(texto) {
            for (i = 0; i < texto.length; i++) {
                if (caracteres.indexOf(texto.charAt(i), 0) != -1) {
                    return true;
                }
            }
            return false;
        }
        if ((campopassword.value.length <= 8 && campopassword.value.length >= 1)) {
            errores.push(' La contraseña  debe tener mas de 8 caracteres');
        }
        else if (campopassword.value == "") {
            errores.push('fill in the password field');
        }
        else if (tiene_mayusculas(campopassword.value) == false) {
            errores.push('contraseña debe tener almenos una mayuscula');
        }
        else if (tiene_minusculas(campopassword.value) == false) {
            errores.push('contraseña debe tener almenos una minuscula');
        }
        else if (tiene_numeros(campopassword.value) == false) {
            errores.push('contraseña debe tener almenos un numero');
        }
        else if (tiene_caracteres(campopassword.value) == false) {
            errores.push('contraseña debe tener almenos un caracter');
        }
        /*if(campopassword.value == " " || campopassword.value==""){
            errores.push('fill in the key field')
        }
*/
        /* if (errores.length > 0) {
            e.preventDefault();
            let nombr = document.getElementById("nombr");
            for (let i = 0; i < errores.length; i++) {
                nombr.innerHTML += "<p>" + errores[i] + "</p>"
            }
        } */
    }) 
});