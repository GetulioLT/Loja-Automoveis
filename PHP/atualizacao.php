<?php
// Incluindo o arquivo com as informações de conexão ao banco de dados
include("infos.php");

// Obtendo o ID do formulário enviado via método POST
$id = $_POST["id"];

// Exibindo o ID para fins de depuração
echo $id;

// Criando uma nova instância de conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $database);

// Verificando se houve erro na conexão
if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}

// Atualizando a quantidade na tabela "alocacao" para o registro com o ID fornecido
$sql = "UPDATE alocacao SET quantidade = quantidade - 1 WHERE id = " . $id;
$conn->query($sql);

// Exibindo uma mensagem de sucesso em JavaScript e redirecionando para a página "index.html"
echo '<script>alert("Venda Feita com Sucesso");
window.location.href = "../index.html";</script>';

// Fechando a conexão com o banco de dados
$conn->close();
?>
