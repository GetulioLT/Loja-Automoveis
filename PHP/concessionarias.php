<?php
// Incluindo o arquivo com as informações de conexão ao banco de dados
include("infos.php");

// Criando uma nova instância de conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $database);

// Verificando se houve erro na conexão
if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}

// Executando a consulta SQL para obter todos os registros da tabela "concessionarias"
$sql = "SELECT * FROM concessionarias";
$result = $conn->query($sql);

// Verificando se existem resultados
if ($result->num_rows > 0) {
    $data = array();

    // Iterando sobre os resultados e armazenando em um array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Convertendo o array em formato JSON
    $json_data = json_encode($data);

    // Exibindo o JSON com os dados
    echo $json_data;
} else {
    echo "Nenhum resultado encontrado.";
}

// Fechando a conexão com o banco de dados
$conn->close();
?>
