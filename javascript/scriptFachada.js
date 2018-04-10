
function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    
    
    var radianes=Math.PI/180*45;
    
    
    //Capa 1: Chimenea
    lienzo.fillStyle="#F7BE81";
    //Chimenea
    lienzo.fillRect(150, 80, 40, 40);
    lienzo.fillRect(147, 60, 46, 18);
    
    
    //Capa 2: Tejado
    lienzo.fillStyle="#61380B";
    //Tejado principal
    lienzo.beginPath();
    lienzo.moveTo(155, 115);
    lienzo.lineTo(70, 228);
    lienzo.lineTo(810, 228);
    lienzo.lineTo(700, 115);
    lienzo.fill();
    //Tejado de atras de la cochera
    lienzo.moveTo(740, 160);
    lienzo.lineTo(780, 240);
    lienzo.lineTo(1050, 240);
    lienzo.lineTo(970, 160);
    //Tejado cochera
    lienzo.moveTo(720, 360);
    lienzo.lineTo(820, 340);
    lienzo.lineTo(995, 253);
    lienzo.lineTo(860, 287);
    lienzo.fill();
    
    
    //Capa 3: Barra de aluinio
    lienzo.fillStyle="#A4A4A4";
    //Barra de aluminio principal
    lienzo.fillRect(100, 230, 690, 13);
    //Barra de aluminio cochera
    lienzo.fillRect(762, 242, 265, 9);
    
    
    //Capa 4: Casa color beige
    lienzo.fillStyle="#F7BE81";
    //Principal
    lienzo.fillRect(120, 245, 640, 230);
    //Cochera
    lienzo.beginPath();
    lienzo.moveTo(830, 335);
    lienzo.lineTo(830, 500);
    lienzo.lineTo(1155, 500);
    lienzo.lineTo(1155, 335);
    lienzo.lineTo(992, 255);
    lienzo.fill();
    //Atras de la Cochera
    lienzo.beginPath();
    lienzo.moveTo(762, 252);
    lienzo.lineTo(762, 333);
    lienzo.lineTo(990, 252);
    lienzo.fill();
    //Chimenea
    lienzo.fillRect(150, 80, 40, 40);
    lienzo.fillRect(147, 60, 46, 18);
    //Pared de cochera obscura
    lienzo.fillStyle="#B58950";
    lienzo.beginPath();
    lienzo.moveTo(762, 355);
    lienzo.lineTo(762, 475);
    lienzo.lineTo(828, 500);
    lienzo.lineTo(828, 335);
    lienzo.fill();
    //Chimenea sombreada
    lienzo.beginPath();
    lienzo.moveTo(192, 80);
    lienzo.lineTo(192, 118);
    lienzo.lineTo(210, 110);
    lienzo.lineTo(210, 95);
    lienzo.moveTo(195, 60);
    lienzo.lineTo(195, 78);
    lienzo.lineTo(215, 95);
    lienzo.lineTo(215, 80);
    lienzo.fill();
    
    
    //Capa 5: Puerta
    lienzo.fillStyle="#E18C7B";
    lienzo.beginPath();
    lienzo.moveTo(400, 475);
    lienzo.lineTo(480, 475);
    lienzo.lineTo(480, 380);
    lienzo.arc(440, 390, 40, 0, radianes*4, true);
    lienzo.fill();
    
    
    //Capa 6: Marco de ventanas
    lienzo.fillStyle="#61380B";
    //Ventana inferior izquierda
    lienzo.beginPath();
    lienzo.moveTo(173, 392);
    lienzo.quadraticCurveTo(250, 310, 327, 392);
    //Ventana inferior derecha
    lienzo.moveTo(553, 392);
    lienzo.quadraticCurveTo(625, 310, 707, 392);
    lienzo.fill();
    
    
    //Capa 7: Ventanas
    lienzo.fillStyle="#A9E2F3";
    //Ventana superior izquierda
    lienzo.fillRect(175, 245, 152, 65);
    //Ventana superior derecha
    lienzo.fillRect(550, 245, 152, 65);
    //Ventana inferior izquierda
    lienzo.beginPath();
    lienzo.moveTo(175, 395);
    lienzo.lineTo(210, 382);
    lienzo.lineTo(285, 382);
    lienzo.lineTo(325, 395);
    lienzo.lineTo(325, 453);
    lienzo.lineTo(285, 462);
    lienzo.lineTo(210, 462);
    lienzo.lineTo(175, 453);
    //Ventana inferior derecha
    lienzo.moveTo(555, 395);
    lienzo.lineTo(590, 385);
    lienzo.lineTo(665, 385);
    lienzo.lineTo(705, 395);
    lienzo.lineTo(705, 453);
    lienzo.lineTo(665, 462);
    lienzo.lineTo(590, 462);
    lienzo.lineTo(555, 453);
    //Ventana de atras de la cochera
    lienzo.moveTo(850, 255);
    lienzo.lineTo(850, 300);
    lienzo.lineTo(980, 254);
    lienzo.fill();
    //Ventana de la cochera
    lienzo.fillRect(965, 290, 45, 32);
    
    
    //Capa 8: Detalle en puerta y ventana
    lienzo.fillStyle="#61380B";
    //Detalle en puerta
    lienzo.beginPath();
    lienzo.moveTo(415, 480);
    lienzo.arc(440, 393, 10, 0, radianes*8, false);
    lienzo.moveTo(400, 463);
    lienzo.arc(410, 423, 7, 0, radianes*8, false);
    lienzo.fill();
    //Margen de puerta
    lienzo.strokeStyle="#61380B";
    lienzo.lineWidth=8;
    lienzo.beginPath();
    lienzo.moveTo(397, 475);
    lienzo.lineTo(397, 380);
    lienzo.quadraticCurveTo(438, 330, 482, 380);
    lienzo.lineTo(482, 475);
    lienzo.stroke();
    //Detalle de ventana inferior izquierda
    lienzo.beginPath();
    lienzo.strokeStyle="#37150B";
    lienzo.lineWidth=4;
    lienzo.lineCap="butt";
    lienzo.moveTo(175, 393);
    lienzo.lineTo(210, 382);
    lienzo.lineTo(285, 382);
    lienzo.lineTo(325, 393);
    lienzo.lineTo(325, 453);
    lienzo.lineTo(285, 462);
    lienzo.lineTo(210, 462);
    lienzo.lineTo(175, 453);
    lienzo.lineTo(175, 391);
    //Ventana inferior derecha
    lienzo.moveTo(555, 393);
    lienzo.lineTo(590, 385);
    lienzo.lineTo(665, 385);
    lienzo.lineTo(705, 393);
    lienzo.lineTo(705, 453);
    lienzo.lineTo(665, 462);
    lienzo.lineTo(590, 462);
    lienzo.lineTo(555, 453);
    lienzo.lineTo(555, 391);
    //Ventana de atras de la cochera
    lienzo.moveTo(850, 302);
    lienzo.lineTo(850, 255);
    lienzo.lineTo(982, 255);
    //Ventana superior izquierda
    lienzo.moveTo(173, 245);
    lienzo.lineTo(327, 245);
    lienzo.lineTo(327, 310);
    lienzo.lineTo(175, 310);
    lienzo.lineTo(175, 245);
    lienzo.moveTo(251, 245);
    lienzo.lineTo(251, 310);
    //ventana seperior derecha
    lienzo.moveTo(548, 245);
    lienzo.lineTo(700, 245);
    lienzo.lineTo(700, 310);
    lienzo.lineTo(550, 310);
    lienzo.lineTo(550, 245);
    lienzo.moveTo(626, 245);
    lienzo.lineTo(626, 310);
    //Ventana cochera
    lienzo.moveTo(964, 290);
    lienzo.lineTo(1010, 290);
    lienzo.lineTo(1010, 322);
    lienzo.lineTo(965, 322);
    lienzo.lineTo(965, 290);
    //Mas detalles de la ventana izquierda
    lienzo.lineWidth=2;
    lienzo.moveTo(175, 415);
    lienzo.lineTo(210, 405);
    lienzo.lineTo(285, 405);
    lienzo.lineTo(325, 415);
    lienzo.moveTo(175, 435);
    lienzo.lineTo(210, 440);
    lienzo.lineTo(285, 440);
    lienzo.lineTo(325, 435);
    lienzo.moveTo(210, 382);
    lienzo.lineTo(210, 462);
    lienzo.moveTo(285, 382);
    lienzo.lineTo(285, 462);
    lienzo.moveTo(305, 388);
    lienzo.lineTo(305, 458);
    lienzo.moveTo(250, 382);
    lienzo.lineTo(250, 462);
    lienzo.moveTo(190, 388);
    lienzo.lineTo(190, 458);
    //Mas detalles de la ventana derecha
    lienzo.lineWidth=2;
    lienzo.moveTo(554, 415);
    lienzo.lineTo(590, 405);
    lienzo.lineTo(665, 405);
    lienzo.lineTo(705, 415);
    lienzo.moveTo(705, 435);
    lienzo.lineTo(665, 440);
    lienzo.lineTo(590, 440);
    lienzo.lineTo(555, 435);
    lienzo.moveTo(590, 384);
    lienzo.lineTo(590, 462);
    lienzo.moveTo(665, 384);
    lienzo.lineTo(665, 462);
    lienzo.moveTo(687, 388);
    lienzo.lineTo(687, 458);
    lienzo.moveTo(627, 382);
    lienzo.lineTo(627, 462);
    lienzo.moveTo(570, 388);
    lienzo.lineTo(570, 458);
    //Mas detalle ventana de la cochera
    lienzo.moveTo(987, 290);
    lienzo.lineTo(987, 322);
    lienzo.moveTo(964, 306);
    lienzo.lineTo(1010, 306);
    //Mas detalle ventana atras de la cochera
    lienzo.moveTo(920, 255);
    lienzo.lineTo(920, 277);
    //Cochera
    lienzo.moveTo(860, 348);
    lienzo.lineTo(860, 500);
    lienzo.moveTo(1125, 348);
    lienzo.lineTo(1125, 500);
    for (var i = 349; i <= 500; i += 50) {
        lienzo.moveTo(860, i);
        lienzo.lineTo(1125, i);
    }
    lienzo.stroke();
    //Picaporte puerta
    lienzo.beginPath()
    lienzo.fillStyle="#A9E2F3";
    lienzo.moveTo(415, 480);
    lienzo.arc(440, 393, 6, 0, radianes*8, false);
    lienzo.fill();
    
    
    
    
}

window.addEventListener("load", iniciar, false);

