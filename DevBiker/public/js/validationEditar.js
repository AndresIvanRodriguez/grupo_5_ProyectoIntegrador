

window.addEventListener("load", function(){
    // console.log('hola desde register' );
 
     let formulario= document.getElementById("edit");
     formulario.addEventListener("submit",function(e){
 
         let errores=[];
         //let aviso="";
 
         let campoNombre=document.getElementById("nombre");
         if(campoNombre.value == " " || campoNombre.value=="" ){
             errores.push('fill in the name field');
         }
         let campoApellido =document.getElementById("apellido");
         if(campoApellido.value == " " ||campoApellido.value =="" ) {
             errores.push('fill in the last name field');
         }
         let campoEmail=document.getElementById("email");
         if(campoEmail.value == " "  || campoEmail.value == ""){
             errores.push('fill in the email field');
         }
         let campoDireccion=document.getElementById("direccion");
         if(campoDireccion.value == " " || campoDireccion.value==""){
             errores.push('fill in the address field')
         }
         let campofechaNacimiento=document.getElementById("fechaNacimiento");
         if(campofechaNacimiento.value == " " || campofechaNacimiento.value==""){
             errores.push('fill in the date of birth field')
         }
         let campopassword=document.getElementById("password");
         if(campopassword.value == " " || campopassword.value==""){
             errores.push('fill in the key field')
         }
 
 
 
         if (errores.length > 0){
             e.preventDefault();
 
             let nombr= document.getElementById("nombr");
 
             for (let i=0 ; i<errores.length ; i++){
 
                 nombr.innerHTML+= "<li>"+errores[i]+"</li>"
             }
         }
 
     })
 
 
 });
 