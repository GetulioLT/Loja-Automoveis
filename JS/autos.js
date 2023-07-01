// Obtém o título da área armazenado no objeto localStorage
let tituto_area = localStorage.getItem('titulo');

// Obtém o número da área armazenado no objeto localStorage
let area = localStorage.getItem('area');

// Define o título da página com o título da área
document.getElementById("h1-autos").innerHTML = tituto_area;

// Array para armazenar os números dos veículos disponíveis na área
let num_veiculos = [];

// Array para armazenar as informações dos veículos (modelo e preço)
let veiculos = [];

// Array para armazenar os nomes dos veículos
let nome_veiculo = [];

// Realiza uma requisição para obter os dados de alocação dos veículos
fetch("PHP/alocacao.php")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Filtra os veículos disponíveis na área e adiciona seus números ao array num_veiculos
        for (let i = 0; i < data.length; i++) {
            if (data[i].area == area && data[i].quantidade != 0) {
                num_veiculos.push(parseInt(data[i].automovel));
            }
        }
    })
    .then(function () {
        // Realiza uma requisição para obter os dados dos veículos
        fetch("PHP/automoveis.php")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let html = "";

                // Percorre os veículos disponíveis na área
                for (let i = 0; i < num_veiculos.length; i++) {
                    // Percorre todos os veículos para encontrar as informações correspondentes
                    for (let j = 0; j < data.length; j++) {
                        // Verifica se o número do veículo coincide
                        if (num_veiculos[i] == data[j].id) {
                            // Adiciona as informações do veículo (modelo e preço) ao array veiculos
                            veiculos.push(`${data[j].modelo} | ${data[j].preco}`);
                            // Adiciona o nome do veículo ao array nome_veiculo
                            nome_veiculo.push(data[j].modelo);
                        }
                    }
                }

                // Gera a estrutura HTML para exibir as informações dos veículos disponíveis na área
                for (let i = 0; i < veiculos.length; i++) {
                    html += `<div class="row">` +
                        `<div class="col s8 offset-l1 autos">${veiculos[i]}</div>` +
                        `<div class="col s3 autos"><Button onclick="direcionamento(${num_veiculos[i]}, '${nome_veiculo[i]}')">Vender</Button></div>` +
                        `</div><br>`;
                }

                // Insere o conteúdo HTML gerado no elemento com o id "info"
                document.getElementById("info").innerHTML = html;
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    .catch(function (error) {
        console.log(error);
    });

// Função para redirecionar para a página de vendas e armazenar os dados do veículo selecionado no objeto localStorage
function direcionamento(id, veiculo) {
    window.location.href = "vendas.html";
    localStorage.setItem("id_veiculo", id);
    localStorage.setItem("nome_veiculo", veiculo);
}
