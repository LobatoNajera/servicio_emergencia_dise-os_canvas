function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    
    
    //Color del interior
    lienzo.fillStyle="white";
    lienzo.fillRect(170, 100, 68, 180);
    lienzo.strokeStyle="black";
    lienzo.strokeRect(170, 100, 68, 180);
    
    //Color del interior
    lienzo.fillStyle="black";
    lienzo.fillRect(200, 85, 5, 15);
    
    
    //Color del interior
    lienzo.fillStyle="yellow";
    lienzo.beginPath();
    lienzo.moveTo(185, 65);
    lienzo.quadraticCurveTo(190, 30, 190, 40);
    lienzo.quadraticCurveTo(200, 60, 195, 20);
    lienzo.quadraticCurveTo(222, 45, 225, 65);
    lienzo.fill();
    
    
    //Medio Circulo2
    var grados=180;
    var radianes=Math.PI/180*grados;
    lienzo.moveTo(205, 65);
    lienzo.arc(205, 65, 20, 0, radianes, false);
    lienzo.strokeStyle="#FFFFFF"
    lienzo.fill();
    
    
    //Color del interior
    lienzo.fillStyle="red";
    lienzo.beginPath();
    lienzo.moveTo(192, 65);
    lienzo.quadraticCurveTo(192, 34, 195, 50);
    lienzo.quadraticCurveTo(204, 57, 200, 30);
    lienzo.quadraticCurveTo(220, 45, 222, 65);
    lienzo.fill();
    
    var grados=180;
    var radianes=Math.PI/180*grados;
    lienzo.moveTo(207, 65);
    lienzo.arc(207, 65, 15, 0, radianes, false);
    lienzo.strokeStyle="#FFFFFF"
    lienzo.fill();
    
}

window.addEventListener("load", iniciar, false);


