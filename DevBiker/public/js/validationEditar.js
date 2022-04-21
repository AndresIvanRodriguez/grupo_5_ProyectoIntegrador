window.addEventListener("load", function(){
    // console.log('hola desde register' );
     let formulario= document.getElementById("edit");
     formulario.addEventListener("submit",function(e){
         
        // Validacion del campo nombre
        let campoNombre = document.getElementById("nombre");
        let campoN = document.getElementById("campoN");

        if(campoNombre.value == ""){
            e.preventDefault();
            campoN.innerHTML = "Debes completar este campo";
        } else if(campoNombre.value.length == 1){
            e.preventDefault();
            campoN.innerHTML = "El campo debe contener minimo 2 caracteres";
        } else {
            campoN.style.display = "none";
        } 
        
        // Validacion campo apellidos
        let campoApellido = document.getElementById("apellido");
        let campoA = document.getElementById("campoA");

        if(campoApellido.value == ""){
            e.preventDefault();
            campoA.innerHTML = "Debes completar este campo";
        }
        else if(campoApellido.value.length == 1){
            e.preventDefault();
            campoA.innerHTML = "El campo debe contener minimo 2 caracteres";
        } else {
            campoA.style.display = "none";
        }

        // Validacion campo email
        let campoEmail = document.getElementById("email");
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
        
        // Validacion campo dirección
        let campoDireccion = document.getElementById("direccion");
        let campoD = document.getElementById("campoD");
        if(campoDireccion.value == ""){
            e.preventDefault();
            campoD.innerHTML = "Debes completar este campo";
        } else {
            campoD.style.display = "none";
        }

        // Validación campo fecha
        let campofechaNacimiento = document.getElementById("fechaNacimiento");
        let campoF = document.getElementById("campoF");
        if(campofechaNacimiento.value == ""){
            e.preventDefault();
            campoF.innerHTML = "Debes completar este campo";
        } else {
            campoF.style.display = "none";
        }

        // Validación campo contraseña
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
        }
     })
 });