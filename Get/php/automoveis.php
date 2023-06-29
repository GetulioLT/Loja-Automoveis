<?php
// Informações de conexão com o banco de dados
$host = "web-conce.cyp6jjti2v9z.sa-east-1.rds.amazonaws.com";
$username = "jason";
$password = "X3qczvx6i5qJwt0XOmeq";
$database = "db_conce";

// Conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $database);

// Verificar se houve erro na conexão
if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}

// Consulta SQL para selecionar todos os registros da tabela "automoveis"
$sql = "SELECT * FROM automoveis";
$result = $conn->query($sql);

// Verificar se há resultados retornados pela consulta
if ($result->num_rows > 0) {
    // Array para armazenar os resultados da consulta
    $data = array();

    // Iterar sobre os resultados e armazená-los em um array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Converter o array em formato JSON
    $json_data = json_encode($data);

    // Imprimir os dados no formato JSON
    echo $json_data;
} else {
    echo "Nenhum resultado encontrado.";
}

// Fechar a conexão com o banco de dados
$conn->close();
?>
