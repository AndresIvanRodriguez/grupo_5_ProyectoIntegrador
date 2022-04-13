window.addEventListener("load", function(){
    // console.log('hola desde register' );
     let formulario= document.getElementById("edit");
     formulario.addEventListener("submit",function(e){
         let errores=[];
         //let aviso="";
         let campoNombre=document.getElementById("nombre");
         if((campoNombre.value.length <=2 && campoNombre.value.length>=1  )){
             errores.push('El nombre debe tener mas de dos caracteres');
         }
         else if(campoNombre.value=="" ){
             errores.push('El nombre no puedeser nulo');
         }
         let campoValor =document.getElementById("valor");
         if(campoValor.value == " " ||campoValor.value =="" ) {
             errores.push('El valor no puedeser nulo');
         }
         let campoColor=document.getElementById("color");
         if(campoColor.value == " "  || campoColor.value == ""){
             errores.push('El color no puedeser nulo');
         }
         let campoDescuento=document.getElementById("descuento");
         if(campoDescuento.value == " " || campoDescuento.value==""){
             errores.push('El descuento no puedeser nulo')
         }
         let campoStock=document.getElementById("stock");
         if(campoStock.value == " " || campoStock.value==""){
             errores.push('El stock no puedeser nulo')
         }
         let campoCategoria=document.getElementById("categoria");
         if(campoCategoria.value == "Elige una categoria"  || campoCategoria.value == "------------------" ){
             errores.push('La categoria no puedeser nula')
         }
         let campoGenero=document.getElementById("genero");
         if(campoGenero.value == "Elige un genero" || campoGenero.value =="------------------"){
             errores.push('El genero no puedeser nulo')
         }
         let campoImagen=document.getElementById("imagen");
         if(campoImagen.value== "" || campoImagen.value==" "){
            errores.push('La imagen no puede estar vacía')
         }
         let campoDescripcion=document.getElementById("descripcion");
         if(campoDescripcion.value=="" || campoDescripcion.value==" "){
             errores.push('La descripción no puede estar vacía')
         }
         let campoMarco=document.getElementById("marco");
         if(campoMarco.value=="" || campoMarco.value==" "){
             errores.push('El campo marco no puede estar vacío')
         }
         let campoCamibios=document.getElementById("camibios");
         if(campoCamibios.value=="" || campoCamibios.value==" "){
             errores.push('El campo no puede estar vacía')
         }
         let campoFrenos=document.getElementById("frenos");
         if(campoFrenos.value==""  || campoFrenos.value==" "){
             errores.push('El campo Frenos no puede estar vacío')
         }
         let campoSuspension=document.getElementById("suspension");
         if(campoSuspension.value==""  || campoSuspension.value==" "){
             errores.push('Indique el tipo de suspensión')
         }
         if (errores.length > 0){
             e.preventDefault();
             let nombr= document.getElementById("nombr");
             for (let i=0 ; i<errores.length ; i++){
                 nombr.innerHTML+= "<p>"+errores[i]+"</p>"
             }
         }
     })
 });