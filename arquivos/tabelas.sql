-- Criação da tabela "automoveis"
CREATE TABLE automoveis (
    id INTEGER PRIMARY KEY, -- Chave primária da tabela, identificador único para cada registro
    modelo VARCHAR(155), -- Coluna para armazenar o modelo do automóvel
    preco VARCHAR(155) -- Coluna para armazenar o preço do automóvel
);

-- Criação da tabela "concessionarias"
CREATE TABLE concessionarias (
    id INTEGER PRIMARY KEY, -- Chave primária da tabela, identificador único para cada registro
    concessionaria VARCHAR(155) -- Coluna para armazenar o nome da concessionária
);

-- Criação da tabela "clientes"
CREATE TABLE clientes (
    id INTEGER PRIMARY KEY, -- Chave primária da tabela, identificador único para cada registro
    nome VARCHAR(155) -- Coluna para armazenar o nome do cliente
);

-- Criação da tabela "alocacao"
CREATE TABLE alocacao (
    id INTEGER PRIMARY KEY, -- Chave primária da tabela, identificador único para cada registro
    area INTEGER, -- Coluna para armazenar a área de alocação
    automovel INTEGER, -- Coluna para armazenar o identificador do automóvel alocado
    FOREIGN KEY(automovel) REFERENCES automoveis(id), -- Restrição de chave estrangeira referenciando a tabela "automoveis"
    concessionaria INTEGER, -- Coluna para armazenar o identificador da concessionária relacionada
    FOREIGN KEY(concessionaria) REFERENCES concessionarias(id), -- Restrição de chave estrangeira referenciando a tabela "concessionarias"
    quantidade INTEGER -- Coluna para armazenar a quantidade de automóveis alocados
);
