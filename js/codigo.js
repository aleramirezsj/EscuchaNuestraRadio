$(document).ready(
	function ()
	{
        //$("#contenedorPagina").fadeIn(6000);
        $("#menuStaFe").bind("click",mostrarSantaFe);
        $("#menuBsAs").bind("click",mostrarBuenosAires);
        $("#menuSantiago").bind("click",mostrarSantiago);
        $("#menuInicio").bind("click",mostrarInicio);
        //$("#enlacetecnologia").bind("click",mostrarTecnologia);
        //$("#enlacepea").bind("click",mostrarPea);
        //$(".volver").bind("click",mostrarPlanDeEstudio);
	}
);
function mostrarSantaFe(){
    $("#contenedorPagina").hide(1500);
    $("#divBsAs").hide(1500);
    $("#divSantiago").hide(1500);
    $("#divSantaFe").show(3000);
}
function mostrarBuenosAires(){
    $("#contenedorPagina").hide(500);
    $("#divSantaFe").hide(500);
    $("#divSantiago").hide(500);
    $("#divBsAs").show(500);
}
function mostrarSantiago(){
    $("#contenedorPagina").hide(1500);
    $("#divSantaFe").hide(1500);
    $("#divBsAs").hide(1500);
    $("#divSantiago").show(3000);
}
function mostrarInicio(){
    $("#divSantiago").hide(1500);
    $("#divSantaFe").hide(1500);
    $("#divBsAs").hide(1500);
    $("#contenedorPagina").show(3000);
}
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