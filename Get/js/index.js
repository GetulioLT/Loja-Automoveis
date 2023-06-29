// Realiza uma requisição para o arquivo "php/alocacao.php" e manipula os dados recebidos
fetch("php/alocacao.php")
    .then(function (response) {
        return response.json(); // Converte a resposta em formato JSON
    })
    .then(function (data) {
        console.log(data); // Imprime os dados no console

        let areas = data.map(({ area }) => parseInt(area)); // Extrai a área de cada objeto e converte para um número inteiro

        let codHtml = ""; // Variável para armazenar o código HTML gerado

        // Loop para gerar o código HTML com base nos dados recebidos
        for (let i = 1; i <= 6; i++) {
            if (areas.includes(i)) {
                // Se a área estiver disponível, gera uma div com estilo e função de clique específicos
                codHtml += `<div class="area${i} border" onclick="area(${i})" style="background-color: red; color: #FFFFFF;">${i}</div>`;
            } else {
                // Se a área não estiver disponível, gera uma div com estilo e função de clique específicos
                codHtml += `<div class="area${i} border" onclick="aviso()" style="background-color: #FFFFFF">${i}</div>`;
            }
        }

        // Insere o código HTML gerado no elemento com o ID "principal"
        document.getElementById("principal").innerHTML = codHtml;
    })
    .catch(function (error) {
        // Exibe um alerta em caso de erro na requisição
        alert(error);
    });

// Função que exibe um alerta indicando que a área está indisponível para compra
function aviso() {
    alert("Área indisponível para compra");
}

// Função que redireciona o usuário para a página "autos.html" e armazena dados no objeto localStorage
function area(local) {
    window.location.href = "autos.html"; // Redireciona para a página "autos.html"
    localStorage.setItem("titulo", "Área " + local); // Armazena o título da área no objeto localStorage
    localStorage.setItem("area", local); // Armazena o número da área no objeto localStorage
}
