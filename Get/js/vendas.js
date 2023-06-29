// Obter o título do veículo armazenado no localStorage
let titulo = localStorage.getItem("nome_veiculo");
document.getElementById("vendas-h1").innerHTML = titulo;

// Obter o ID do veículo armazenado no localStorage
let id_veiculo = localStorage.getItem("id_veiculo");
let concessionaria = "";

// Requisição para obter dados dos clientes
fetch("php/clientes.php")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Construir as opções de seleção para os clientes
        let codHtml = '<Label class="vendas-espaco">Cliente:</Label>' +
            '<select>' +
            '<option disabled selected></option>';

        for (let i = 0; i < data.length; i++) {
            codHtml += `<option>${data[i].nome}</option>`;
        }
        codHtml += '</select><br><br>';

        // Preencher o elemento HTML com as opções de seleção dos clientes
        document.getElementById("vendas-clientes").innerHTML = codHtml;
    })
    .catch(function(error) {
        console.log("Erro ao obter dados dos clientes:", error);
    });

// Requisição para obter dados de alocação
fetch("php/alocacao.php")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Procurar a alocação correspondente ao ID do veículo
        for (let i = 0; i < data.length; i++) {
            if (data[i].automovel == id_veiculo) {
                concessionaria = data[i].concessionaria;
            }
        }
    })
    .catch(function(error) {
        console.log("Erro ao obter dados de alocação:", error);
    });

// Requisição para obter dados das concessionárias
fetch("php/concessionarias.php")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Construir as opções de seleção para as concessionárias
        let codHtml = '<Label>Concessionaria:</Label>' +
            '<select name="id">' +
            '<option value="" disabled selected></option>';

        for (let i = 0; i < data.length; i++) {
            if (data[i].id == concessionaria) {
                console.log(data[i].id);
                codHtml += `<option value="${id_veiculo}">${data[i].concessionaria}</option>`;
            }
        }
        codHtml += '</select><br><br>';

        // Preencher o elemento HTML com as opções de seleção das concessionárias
        document.getElementById("vendas-conce").innerHTML = codHtml;
    })
    .catch(function(error) {
        console.log("Erro ao obter dados das concessionárias:", error);
    });
