window.addEventListener("load", function(){

    let formulario = document.getElementById("register");

    formulario.addEventListener("submit",function(e){

        // Validacion del campo nombre
        let campoNombre = document.getElementById("nombre");
        let campoN = document.getElementById("campoN");

        if(campoNombre.value == ""){
            e.preventDefault();
            campoNombre.classList.add("isInvalid")
            campoN.innerHTML = "Debes completar este campo";
        } else if(campoNombre.value.length == 1){
            e.preventDefault();
            campoN.innerHTML = "El campo debe contener minimo 2 caracteres";
            campoNombre.classList.add("isInvalid")
        } else {
            campoN.style.display = "none";
            campoNombre.classList.remove("isInvalid")
            campoNombre.classList.add("isValid")
        } 
        
        // Validacion campo apellidos
        let campoApellido = document.getElementById("apellido");
        let campoA = document.getElementById("campoA");

        if(campoApellido.value == ""){
            e.preventDefault();
            campoApellido.classList.add("isInvalid")
            campoA.innerHTML = "Debes completar este campo";
        }
        else if(campoApellido.value.length == 1){
            e.preventDefault();
            campoApellido.classList.add("isInvalid")
            campoA.innerHTML = "El campo debe contener minimo 2 caracteres";
        } else {
            campoA.style.display = "none";
            campoApellido.classList.remove("isInvalid")
            campoApellido.classList.add("isValid")
        }

        // Validacion campo email
        let campoEmail = document.getElementById("email");
        let array = campoEmail.value.indexOf("@",0);
        let campoE = document.getElementById("campoE");
            
        if(campoEmail.value == ""){
            e.preventDefault();
            campoEmail.classList.add("isInvalid")
            campoE.innerHTML = "Debes completar este campo"
        } else if(array == -1){
            e.preventDefault();
            campoEmail.classList.add("isInvalid")
            campoE.innerHTML = "Correo no válido";          
        } else {
            campoE.style.display = "none";
            campoEmail.classList.remove("isInvalid")
            campoEmail.classList.add("isValid")
        }
        
        // Validacion campo dirección
        let campoDireccion = document.getElementById("direccion");
        let campoD = document.getElementById("campoD");
        if(campoDireccion.value == ""){
            e.preventDefault();
            campoDireccion.classList.add("isInvalid")
            campoD.innerHTML = "Debes completar este campo";
        } else {
            campoD.style.display = "none";
            campoDireccion.classList.remove("isInvalid")
            campoDireccion.classList.add("isValid")
        }

        // Validación campo fecha
        let campofechaNacimiento = document.getElementById("fechaNacimiento");
        let campoF = document.getElementById("campoF");
        if(campofechaNacimiento.value == ""){
            e.preventDefault();
            campofechaNacimiento.classList.add("isInvalid")
            campoF.innerHTML = "Debes completar este campo";
        } else {
            campoF.style.display = "none";
            campofechaNacimiento.classList.remove("isInvalid")
            campofechaNacimiento.classList.add("isValid")
        }

        // Validación campo contraseña
        let campoPassword = document.getElementById("password");
        let campoP = document.getElementById("campoP");
        if(campoPassword.value == ""){
            e.preventDefault();
            campoPassword.classList.add("isInvalid")
            campoP.innerHTML = "Debes completar este campo";
        } else if(campoPassword.value <= 8){
            e.preventDefault();
            campoPassword.classList.add("isInvalid")
            campoP.innerHTML = "La contraseña debe contener minimo 8 carcteres";          
        } else {
            campoP.style.display = "none";
            campoPassword.classList.remove("isInvalid")
            campoPassword.classList.add("isValid")
        }

        // Validación campo imagen
        let campoImagen = document.getElementById("imagen");
        let campoI = document.getElementById("campoI");
        let extPermitidas = /(.png|.PNG|.jpg|.JPG|.JPEG|.jpeg|.GIF|.gif)$/i;

        if(campoImagen.value == ""){
            e.preventDefault();
            campoI.innerHTML = "Debes completar este campo";
        } else if(!extPermitidas.exec(campoImagen.value)){
            e.preventDefault();
            campoI.innerHTML = "El tipo de imagen no es válido";          
        } else {
            campoI.style.display = "none";
            campoImagen.classList.add("isValid")
        }

        const removeIsInvalid = (e) => {
            e.target.classList.remove("isInvalid")
        }

        campoNombre.onkeydown = removeIsInvalid;
        campoApellido.onkeydown = removeIsInvalid;
        campoEmail.onkeydown = removeIsInvalid;
        campoDireccion.onkeydown = removeIsInvalid;
        campofechaNacimiento.onkeydown = removeIsInvalid;
        campoPassword.onkeydown = removeIsInvalid;
    })

});
