# Loja-Automoveis

Projeto de um website, com HTML, CSS, JS e PHP, com inclusão de conexão com Banco de Dados RDS e Materialize CSS.

Para a execução do mesmo siga os seguintes passos(Execução local):

1. Baixe o projeto, após isso crie um banco de dados e execute o comando tabelas.sql que está na pasta arquivos.

2. Inclua os arquivos .csv no banco de dados de acordo com as tabelas criadas.

3. Após isso mude as configurações nos arquivos PHP para ser de acordo com o seu db.

4. Por conter códigos em php é necessario instalar o mesmo e ativalo, para isso siga o link abaixo:
<https://www.youtube.com/watch?v=TxmPhYDkQQI&t=194s&pp=ygURY29tbyBiYWl4YXIgbyBwaHA%3D>

5. com o php instalado é necessario ativar o apache no xampp ou outra ferramenta.

6. Após startar o apache é preciso colocar o projeto na pasta do servidor do mesmo, para isso siga esse caminho:
C:\xampp\htdocs

7. Quando chegar na pasta acima, se for a primera vez abrindo ela, apague tudo e deixe apenas a pasta do seu projeto.

8. Por fim basta abrir o localhost e a sua pasta estará lá:
localhost/

Caso queira executar numa maquina vitual, siga esses passos:

1. Faça os 3 primeiros passo, mas após criar o RDS e conectar num SGBD.

2. Crie sua Maquina Virtual EC2 e execute os comnados:
sudo apt-get update
sudo apt-get upgrade

3. vá para a pasta raiz da maquina, volte as pasta até não dar mais.
cd ..

4. Instale o apache, que será com ele criaremos um servidor:
sudo apt-get install apache

5. Após instalar o apache temos agora que instalar também o PHP, para isso siga esse codigo:
sudo add-apt-repository ppa:ondrej/php
sudo apt-get install php php-mysql

6. Estando ainda na pasta raiz da maquina, siga o seguinte caminho:
var/www/html

7. Nessa pasta haverá um arquivo index.html, pode apagar esse arquivo pois iremos dar um clone desse projeto.
rm index.html

8. agora é só dar um clone desse repositorio que deve está no git com as suas alterações.
git clone ***

9. Após isso só ir para o ip da maquina que deve está publico.
