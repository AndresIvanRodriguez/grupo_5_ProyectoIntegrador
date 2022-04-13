window.addEventListener("load", function(){
   // console.log('hola desde register' );

    let formulario= document.getElementById("register");
    formulario.addEventListener("submit",function(e){

        let errores=[];
        //let aviso="";

        let campoNombre=document.getElementById("nombre");
        if((campoNombre.value.length <=2 && campoNombre.value.length>=1  )){
            errores.push('El nombre debe tener mas de dos caracteres');

        }
        else if(campoNombre.value=="" ){
            errores.push('fill in the name field');
        }
        
        let campoApellido =document.getElementById("apellido");
        if((campoApellido.value.length <=2 && campoApellido.value.length>=1  )){
            errores.push('El apellido debe tener mas de dos caracteres');

        }
        else if(campoApellido.value=="" ){
            errores.push('fill in the apellido field');
        }
        let campoEmail=document.getElementById("email");
        let array= campoEmail.value.indexOf("@",0);
            
        if(array ==-1 || campoEmail.value=="" ){
            errores.push('email no valido');
        }
      
        let campoDireccion=document.getElementById("direccion");
        if(campoDireccion.value == "" || campoDireccion.value==""){
            errores.push('fill in the address field')
        }
        let campofechaNacimiento=document.getElementById("fechaNacimiento");
        if(campofechaNacimiento.value == " " || campofechaNacimiento.value==""){
            errores.push('fill in the date of birth field')
        }
        let campopassword=document.getElementById("password");
        var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
        function tiene_mayusculas(texto){
            for(i=0; i<texto.length; i++){
               if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
                  return true;
               }
            }
            return false;
         }
         var letras="abcdefghyjklmnñopqrstuvwxyz";

         function tiene_minusculas(texto){
            for(i=0; i<texto.length; i++){
               if (letras.indexOf(texto.charAt(i),0)!=-1){
                  return true;
               }
            }
            return false;
         }
         var numeros="0123456789";
        function tiene_numeros(texto){
         for(i=0; i<texto.length; i++){
         if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}
var caracteres ="!|#$%&/()=?'¡¿+*~^,;.-_{}[]<>-"
function tiene_caracteres(texto){
    for(i=0; i<texto.length; i++){
    if (caracteres.indexOf(texto.charAt(i),0)!=-1){
    return true;
 }
}
return false;
}
        if((campopassword.value.length <=8 && campopassword.value.length>=1  )){
            errores.push(' La contraseña  debe tener mas de 8 caracteres');

        }
        else if(campopassword.value=="" ){
            errores.push('fill in the password field');
        }
        else if (tiene_mayusculas(campopassword.value)==false){
            errores.push('contraseña debe tener almenos una mayuscula');
        }
        else if (tiene_minusculas(campopassword.value)==false){
            errores.push('contraseña debe tener almenos una minuscula');
        }
        else if (tiene_numeros(campopassword.value)==false){
            errores.push('contraseña debe tener almenos un numero');
        }
        else if (tiene_caracteres(campopassword.value)==false){
            errores.push('contraseña debe tener almenos un caracter');
        }
        if (errores.length >= 1 ){
            e.preventDefault();

            let nombr= document.getElementById("nombr");

            for (let i=0 ; i<errores.length ; i++){

                nombr.innerHTML+= "<p>"+errores[i]+"</p>"
            }
        }//else if (errores.value>){}

    })


});
