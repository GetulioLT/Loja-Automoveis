// Realiza uma requisição HTTP para o arquivo "PHP/alocacao.php" para obter os dados
fetch("PHP/alocacao.php")
    .then(function (response) {
        return response.json(); // Converte a resposta em formato JSON
    })
    .then(function (data) {
        console.log(data); // Exibe os dados no console para fins de depuração

        // Mapeia os valores da propriedade 'area' para um array de números
        let areas = data.map(({ area }) => parseInt(area));

        let html = ""; // String que armazenará o código HTML gerado dinamicamente

        // Itera de 1 a 10 para criar as áreas
        for (let i = 1; i <= 10; i++) {
            // Determina a cor e o evento de clique com base na inclusão da área no array
            const { color, onclick } = getAreaProperties(i, areas);

            // Caso especial para a área 4, adiciona um elemento de texto antes
            if (i === 4) {
                html += `<div class="col s6" style="color: #e1d7d7;">1</div>`;
            }

            // Gera o elemento de área com a classe de tamanho de coluna, cor e evento de clique apropriados
            html += `<div class="col ${getColumnSize(i)} area${i} border" style="background-color: ${color};" onclick="${onclick}">${i}</div>`;
        }

        // Retorna a classe de tamanho da coluna com base no número da área
        function getColumnSize(number) {
            const gridColumnSizes = {
                1: 's2',
                2: 's1',
                3: 's9',
                4: 's8 offset-l1',
                5: 's7',
                6: 's3',
                7: 's5 offset-l5',
                8: 's4',
                9: 's4',
                10: 's4'
            };

            return gridColumnSizes[number];
        }

        // Retorna as propriedades de cor e evento de clique com base na inclusão da área no array
        function getAreaProperties(number, areas) {
            const color = areas.includes(number) ? 'aqua' : 'red';
            const onclick = areas.includes(number) ? `area('${number}')` : 'aviso()';

            return { color, onclick };
        }

        // Atualiza o conteúdo HTML dentro do elemento com o ID "areas-index"
        document.getElementById("areas-index").innerHTML = html;
    })
    .catch(function (error) {
        console.log(error); // Exibe qualquer erro no console para fins de depuração
    });

// Exibe um aviso quando não há carros disponíveis na área
function aviso() {
    alert("Não há carros disponíveis nessa área.");
}

// Redireciona para a página "autos.html" e armazena informações da área selecionada
function area(local) {
    window.location.href = "autos.html"; // Redireciona para a página "autos.html"
    localStorage.setItem("titulo", "Área " + local); // Armazena o título da área no objeto localStorage
    localStorage.setItem("area", local); // Armazena o número da área no objeto localStorage
}
