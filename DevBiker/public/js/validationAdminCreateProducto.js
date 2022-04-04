

window.addEventListener("load", function(){
    // console.log('hola desde register' );
 
     let formulario= document.getElementById("create");
     formulario.addEventListener("submit",function(e){
 
         let errores=[];
         //let aviso="";
 
         let campoNombre=document.getElementById("nombre");
         if(campoNombre.value == " " || campoNombre.value=="" ){
             errores.push('fill in the name field');
         }
         let campoValor =document.getElementById("valor");
         if(campoValor.value == " " ||campoValor.value =="" ) {
             errores.push('fill in the cost field');
         }
         let campoColor=document.getElementById("color");
         if(campoColor.value == " "  || campoColor.value == ""){
             errores.push('fill the field with color');
         }
         let campoDescuento=document.getElementById("descuento");
         if(campoDescuento.value == " " || campoDescuento.value==""){
             errores.push('fill in the discount field')
         }
         let campoStock=document.getElementById("stock");
         if(campoStock.value == " " || campoStock.value==""){
             errores.push('fill in the quantity field')
         }
         let campoCategoria=document.getElementById("categoria");
         if(campoCategoria.value == "Elige una categoria"){
             errores.push('fill in the category field')
         }
         let campoGenero=document.getElementById("genero");
         if(campoGenero.value == "Elige un genero" || campoGenero.value ==""){
             errores.push('fill in the gender field')
         }
         let campoImagen=document.getElementById("imagen");
         if(campoImagen.value== "" || campoImagen.value==" "){
            errores.push('fill the image field')
         }
         let campoDescripcion=document.getElementById("descripcion");
         if(campoDescripcion.value=="" || campoDescripcion.value==" "){
             errores.push('fill en the description field')
         }
         let campoMarco=document.getElementById("marco");
         if(campoMarco.value=="" || campoMarco.value==" "){
             errores.push('fill in the frame field')
         }
         let campoCamibios=document.getElementById("camibios");
         if(campoCamibios.value=="" || campoCamibios.value==" "){
             errores.push('fill in the changen field')
         }
         let campoFrenos=document.getElementById("frenos");
         if(campoFrenos.value==""  || campoFrenos.value==" "){
             errores.push('fill in the brake field')
         }
         let campoSuspension=document.getElementById("suspension");
         if(campoSuspension.value==""  || campoSuspension.value==" "){
             errores.push('fill in the suspension field')
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
 