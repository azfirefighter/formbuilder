<?php
// Installation script

require_once "includes/database.php";

$conn = ActiveRecord\ConnectionManager::get_connection("development"); 

$conn->query(file_get_contents("schema.sql"));

echo "Installing...";
?>