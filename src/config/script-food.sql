-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS viciodoce;
USE viciodoce;

-- Criar tabela: CLIENTE
CREATE TABLE IF NOT EXISTS cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20)
);
SHOW TABLES;
SHOW COLUMNS FROM cliente;

-- Criar tabela: PEDIDO
CREATE TABLE IF NOT EXISTS pedido (
    pedido_id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    data_pedido DATE,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id_cliente)
);
SHOW TABLES;
SHOW COLUMNS FROM pedido;

-- Criar tabela: FORNECEDOR
CREATE TABLE IF NOT EXISTS fornecedor (
    fornecedor_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    endereco VARCHAR(255),
    telefone VARCHAR(20)
);

-- Criar tabela: PRODUTO
CREATE TABLE IF NOT EXISTS produto (
    produto_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    preco DECIMAL(10, 2),
    fornecedor_id INT,
    FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(fornecedor_id)
);

-- Inserir dados de exemplo (opcional)
INSERT INTO cliente (nome, email, telefone) VALUES ('João', 'joao@email.com', '123456789');
INSERT INTO fornecedor (nome, endereco, telefone) VALUES ('Fornecedor A', 'Rua A, 123', '987654321');
INSERT INTO produto (nome, preco, fornecedor_id) VALUES ('Produto X', 10.50, 1);

-- Criar tabela: ITEM_PEDIDO
CREATE TABLE IF NOT EXISTS item_pedido (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    produto_id INT,
    quantidade INT,
    preco_unitario DECIMAL(10, 2),
    FOREIGN KEY (pedido_id) REFERENCES pedido(pedido_id),
    FOREIGN KEY (produto_id) REFERENCES produto(produto_id)
);

-- Exemplo de inserção de dados na tabela ITEM_PEDIDO (opcional)
INSERT INTO item_pedido (pedido_id, produto_id, quantidade, preco_unitario) VALUES (1, 1, 2, 10.50);
