<?php
include ("infos.php");

// Conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $database);

// Verificar se houve erro na conexão
if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}

// Consulta SQL para obter os dados da tabela "alocacao"
$sql = "SELECT * FROM alocacao";
$result = $conn->query($sql);

// Verificar se há resultados da consulta
if ($result->num_rows > 0) {
    // Array para armazenar os resultados da consulta
    $data = array();

    // Loop através dos resultados e armazenar em um array associativo
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