<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
 
$con = @mysqli_connect('localhost', 'root', '', 'laravel');

if (!$con) {
    echo "Error: " . mysqli_connect_error();
	exit();
}

$name = $_POST["name"];
$image = $_POST["image"];
$description = $_POST["description"];


	$sql = "insert into reactcart (name,image,description) values ('$name','$image','$description')";
    $result = mysqli_query ($con,$sql);
	if($result){
		echo "Success"
	}
	else {
		echo "Failed"
	}
?>