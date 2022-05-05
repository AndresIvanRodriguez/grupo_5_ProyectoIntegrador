window.addEventListener("load", function(){
    // console.log('hola desde register' );

     let formulario = document.getElementById("edit");
     formulario.addEventListener("submit",function(e){
         
        // Validacion del campo nombre
        let campoNombre = document.getElementById("nombre");
        let campoN = document.getElementById("campoN");

        if(campoNombre.value == ""){
            e.preventDefault();
            campoN.innerHTML = "Debes completar este campo";
        } else if(campoNombre.value.length < 6){
            e.preventDefault();
            campoN.innerHTML = "El campo debe contener minimo 6 caracteres";
        } else {
            campoN.style.display = "none";
        } 
        
        // Validacion campo Valor
        let campoValor = document.getElementById("valor");
        let campoV = document.getElementById("campoV");

        if(campoValor.value == ""){
            e.preventDefault();
            campoV.innerHTML = "Debes completar este campo";
        } else {
            campoV.style.display = "none";
        }

        // Validacion campo Color
        let campoColor = document.getElementById("color");
        let campoC = document.getElementById("campoC");

        if(campoColor.value == ""){
            e.preventDefault();
            campoC.innerHTML = "Debes completar este campo";
        } else {
            campoC.style.display = "none";
        }
        
        // Validacion campo descuento
        let campoDescuento = document.getElementById("descuento");
        let campoD = document.getElementById("campoD");
        if(campoDescuento.value == ""){
            e.preventDefault();
            campoD.innerHTML = "Debes completar este campo";
        } else {
            campoD.style.display = "none";
        }

        // Validación campo stock
        let campoStock = document.getElementById("stock");
        let campoS = document.getElementById("campoS");
        if(campoStock.value == ""){
            e.preventDefault();
            campoS.innerHTML = "Debes completar este campo";
        } else {
            campoS.style.display = "none";
        }

        // Validación campo categoria
        let campoCat = document.getElementById("categoria");
        let campoCa = document.getElementById("campoCat");
        if(campoCat.value == ""){
            e.preventDefault();
            campoCa.innerHTML = "Debes completar este campo";
        } else {
            campoCa.style.display = "none";
        }

        // Validación campo genero
        let campoGenero = document.getElementById("genero");
        let campoG = document.getElementById("campoG");
        if(campoGenero.value == ""){
            e.preventDefault();
            campoG.innerHTML = "Debes completar este campo";
        } else {
            campoG.style.display = "none";
        }

        // Validación campo descripción
        let campoDescripcion = document.getElementById("descripcion");
        let campoDesc = document.getElementById("campoDesc");
        if(campoDescripcion.value == ""){
            e.preventDefault();
            campoDesc.innerHTML = "Debes completar este campo";
        } else if(campoDescripcion.value.length <= 10){

        } else {
            campoDesc.style.display = "none";
        }

        // Validación campo material marco
        let campoMarco = document.getElementById("marco");
        let campoM = document.getElementById("campoM");
        if(campoMarco.value == ""){
            e.preventDefault();
            campoM.innerHTML = "Debes completar este campo";
        } else {
            campoM.style.display = "none";
        }

        // Validación campo numero de cambios
        let campoNumerosC = document.getElementById("camibios");
        let campoNum = document.getElementById("campoNum");
        if(campoNumerosC.value == ""){
            e.preventDefault();
            campoNum.innerHTML = "Debes completar este campo";
        } else {
            campoNum.style.display = "none";
        }

        // Validación campo tipo de freno
        let campoFrenos = document.getElementById("tipoFreno");
        let campoT = document.getElementById("campoT");
        if(campoFrenos.value == ""){
            e.preventDefault();
            campoT.innerHTML = "Debes completar este campo";
        } else {
            campoT.style.display = "none";
        }

        // Validación campo suspension
        let campoSuspension = document.getElementById("suspension");
        let campoSus = document.getElementById("campoSus");
        if(campoSuspension.value == ""){
            e.preventDefault();
            campoSus.innerHTML = "Debes completar este campo";
        } else {
            campoSus.style.display = "none";
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

        const input = document.querySelectorAll("input")
        const input2 = document.getElementById("input")

        if(input.value == ""){
            e.preventDefault();
            input2.innerHTML = "Debes llenar todos los campos"
        } else {
            input2.style.display = "none";
        }

     })

 });