<?php 
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $imagen = $_POST['imagen'];
	$asunto = 'Contacto Centro Estetica';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br>Telefono:$telefono<br>Imagen:$imagen Mensaje:".$_POST['mensaje'];


	if(mail('sildraghi@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>