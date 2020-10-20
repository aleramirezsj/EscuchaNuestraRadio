//alert("Sitio web ISP20 cargando");

function MostrarCartelito(){
    alert("Has hecho clic en el título");
}

function AgregarSelector(){
    var selector=prompt("Ingrese el selector que quiere agregar:");
    if(selector!=null)
        $("#listaSelectores").append("<li>"+selector+"</li>");    
}

function AgregarTabla(){
    var tabla=$("#tablaOscura").html();
    $("#contenedorPagina").append("<table class='table table-striped'>"+tabla+"</table>");
}