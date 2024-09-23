<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include_once '../db/db.php';

$sql = "SELECT * FROM your_table";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);
?>
