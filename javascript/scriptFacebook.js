var arrComentario = new Array();
var contComentarios = 0;
var contLike = 0;
var arrCodigoMensajes = new Array();
var arrId = new Array();
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
var fecha = (f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

function agregarCom() {
    arrComentario[contComentarios] = document.getElementById("txtComentar").value;
    
    agregarArrCodigoMensajes(contComentarios);
    
    document.getElementById("txtComentar").value="";
    contComentarios++;
}

function agregarCodigo(){
    var cargarComentarios = "";
    
    for (var i = 0; i < arrComentario.length; i++){
        if (parseInt(arrId[i]) >= 0) {
            cargarComentarios += arrCodigoMensajes[i];
        }
    }
    document.getElementById("comentarios").innerHTML = cargarComentarios;
}

function agregarArrCodigoMensajes(numero) {
    arrId[numero] = numero;
    var n = arrId[numero];
    
    arrCodigoMensajes[n] = "<div class='centrarComentarioCreado'>"
            +"<div>"
                +"<input type='text' value='"+arrComentario[n]+"' class='txtComentarioCreado' disabled>"
            +"</div>"
            +"<div>"
                +"<a class='editarComentarioCreado' value=" + n + " onclick='editar(" + n + ")'>Editar.</a>"
                +"<a class='eliminarComentarioCreado' value='eliminar' onclick='eliminar(" + n + ")'>Eliminar.</a>"
                +"<a class='fechaComentarioCreado'>"+fecha+"</a>"
            +"</div>"
        +"</div>";
    
    agregarCodigo();
}

function editar(numero) {
      document.getElementById("editarComentariosTxt").innerHTML = "<div class='editarComentario'>"
            +"<h4>Editar cimentario:</h4>"
            +"<input type='text' id='editarComentarioG' class='editarTxtComentario' value='" + arrComentario[numero] + "'>"
            +"<br><button type='button' id='guardarEditado' onclick='guardarModificacion(" + numero + ")' class='botonEditado'>Guardar</button>"
            +"<button type='button' id='cancelarEditado' onclick='cancelarEditado()' class='botonEditado'>Cancelar</button>"
            +"</div>";
}

function eliminar(numero) {
    delete arrComentario[numero];
    delete arrCodigoMensajes[numero];
    arrId[numero] = -1;
    agregarCodigo();
}

function guardarModificacion(numero) {
    var nuevoTexto = document.getElementById("editarComentarioG").value;
    
    arrComentario[numero] = nuevoTexto;
    cancelarEditado();
    agregarArrCodigoMensajes(numero);
}

function cancelarEditado() {
    document.getElementById("editarComentariosTxt").innerHTML = "";
}

function likeImagen() {
    contLike++;
    document.getElementById("btnLikeFoto").innerHTML = "Me gusta " + contLike;
}



/*
            <div class='centrarComentarioCreado'>
                <div>
                    <input type='text' class='txtComentarioCreado' value="+arrComentario[contComentarios]+" disabled>
                </div>
                <div>
                    <a class='editarComentarioCreado' value='editar' onclick='editar()'>
                        Editar.
                    </a>
                    <a class='eliminarComentarioCreado' value='eliminar' onclick='eliminar()'>
                        Eliminar.
                    </a>
                    <a class='fechaComentarioCreado'>
                        02 de marzo del 2017
                    </a>
                </div>
            </div>
*/



/*
            <div class='centrarComentarioCreado'>
                
                <div>
                    <input type='text' class='txtComentarioCreado' value="arrComentario[contComentarios]" disabled>
                </div>
                <div>
                    <a class='editarComentarioCreado' value='editar' onclick='editar()'>
                        Editar.
                    </a>
                    <a class='eliminarComentarioCreado' value='eliminar' onclick='eliminar()'>
                        Eliminar.
                    </a>
                    <a class="fechaComentarioCreado">
                        02 de marzo del 2017
                    </a>
                </div>
            </div>
*/

