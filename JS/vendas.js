// Obtendo o ID e o nome do veículo armazenados no armazenamento local (localStorage)
let id_veiculo = localStorage.getItem('id_veiculo');
let nome_veiculo = localStorage.getItem('nome_veiculo');
let concessionaria = "";

// Definindo o nome do veículo como título da página de vendas
document.getElementById("h1-vendas").innerHTML = nome_veiculo;

// Requisição AJAX para obter os dados dos clientes
fetch("PHP/clientes.php")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        // Criando as opções da lista suspensa de nomes de clientes
        let html = '<option disabled selected></option>';

        for (let i = 0; i < data.length; i++) {
            html += `<option value="${data[i].id}">${data[i].nome}</option>`;
        }

        // Preenchendo a lista suspensa com as opções de nomes de clientes
        document.getElementById("nome-vendas").innerHTML = html;
    })
    .catch(function (error) {
        console.log(error);
    });

// Requisição AJAX para obter os dados de alocação
fetch("PHP/alocacao.php")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        // Obtendo a concessionária relacionada ao veículo
        for (let i = 0; i < data.length; i++) {
            if (data[i].automovel == id_veiculo) {
                concessionaria = data[i].concessionaria;
            }
        }
    })
    .then(function () {
        // Requisição AJAX para obter os dados das concessionárias
        fetch("PHP/concessionarias.php")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                // Criando as opções da lista suspensa de concessionárias
                let codHtml = '<option value="" disabled selected></option>';

                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == concessionaria) {
                        codHtml += `<option value="${id_veiculo}">${data[i].concessionaria}</option>`;
                    }
                }

                // Preenchendo a lista suspensa com as opções de concessionárias
                document.getElementById("conce-vendas").innerHTML = codHtml;
            })
            .catch(function (error) {
                console.log("Erro ao obter dados das concessionárias:", error);
            });
    })
    .catch(function (error) {
        console.log(error);
    });
