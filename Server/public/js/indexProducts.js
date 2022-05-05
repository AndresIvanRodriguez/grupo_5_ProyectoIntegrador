window.addEventListener('load', function(){
    console.log("hola en index")

    let formEditar = document.querySelectorAll(".formEditar");
    let formDelete = document.querySelectorAll(".formDelete");
    console.log(formDelete)

    formEditar.forEach(form => {
        form.addEventListener("submit", function(e){
            let confirmacion = confirm("¿Deseas editar este producto?")
            if(confirmacion == false){
                e.preventDefault()
            }
        })
    })

    formDelete.forEach(form => {
        form.addEventListener("submit", function(e){
            let confirmacion = confirm("¿Deseas eliminar este producto?")
            if(confirmacion == false){
                e.preventDefault()
            }
        })
    })
    
})