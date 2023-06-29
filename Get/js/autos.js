let titulo = localStorage.getItem("titulo"); // Obtém o valor do item "titulo" armazenado no localStorage
document.getElementById("titulo").innerHTML = titulo; // Define o conteúdo do elemento com o ID "titulo" como o valor obtido

let num_veiculos = []; // Array para armazenar os números de veículos
let nome_veiculo = []; // Array para armazenar os nomes dos veículos
let veiculos = []; // Array para armazenar informações dos veículos
let area = localStorage.getItem("area"); // Obtém o valor do item "area" armazenado no localStorage

// Faz uma requisição fetch para "php/alocacao.php"
fetch("php/alocacao.php")
    .then(function (response) {
        return response.json(); // Converte a resposta para JSON
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].area == area && data[i].quantidade != 0) {
                num_veiculos.push(parseInt(data[i].automovel)); // Adiciona o número do veículo ao array "num_veiculos"
            }
        }
    });

// Faz uma requisição fetch para "php/automoveis.php"
fetch("php/automoveis.php")
    .then(function (response) {
        return response.json(); // Converte a resposta para JSON
    })
    .then(function (data) {
        let codHtml = "";

        for (let i = 0; i < num_veiculos.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (num_veiculos[i] == data[j].id) {
                    veiculos.push(`${data[j].modelo} | ${data[j].preco}`); // Adiciona as informações do veículo ao array "veiculos"
                    nome_veiculo.push(data[j].modelo); // Adiciona o nome do veículo ao array "nome_veiculo"
                }
            }
        }

        for (let i = 0; i < veiculos.length; i++) {
            codHtml += `<label class="auto-modelo">${veiculos[i]}</label>` +
                `<button class="autos-btn" onclick="direcionamento(${num_veiculos[i]} ,  '${nome_veiculo[i]}')">Vender</button>` +
                "<br><br>"; // Cria o HTML para exibir as informações dos veículos e botões de venda
        }

        document.getElementById("autos-label").innerHTML = codHtml; // Define o conteúdo do elemento com o ID "autos-label" como o HTML gerado
    });

function direcionamento(id, veiculo) {
    window.location.href = "vendas.html"; // Redireciona para a página "vendas.html"
    localStorage.setItem("id_veiculo", id); // Armazena o ID do veículo no localStorage
    localStorage.setItem("nome_veiculo", veiculo); // Armazena o nome do veículo no localStorage
}
