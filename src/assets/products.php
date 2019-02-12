<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
 
$con = @mysqli_connect('localhost', 'root', '', 'laravel');

if (!$con) {
    echo "Error: " . mysqli_connect_error();
	exit();
}

	$sql = "select * from reactfetch";
    $result = mysqli_query ($con,$sql);
	while ($row = mysqli_fetch_assoc($result)) {
		$output[]=$row;
	}
	print(json_encode($output));

?>