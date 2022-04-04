
window.addEventListener("load", function(){

    let formulario= document.getElementById("login");
    formulario.addEventListener("submit",function(e){

        let errores=[];
        //let aviso="";


        let campoEmail=document.getElementById("email");
        if(campoEmail.value == " "  || campoEmail.value == ""){
            errores.push('fill in the email field');
            alert('hola')

        }
        let campopassword=document.getElementById("password");
        if(campopassword.value == " " || campopassword.value==""){
            errores.push('fill in the key field')
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
