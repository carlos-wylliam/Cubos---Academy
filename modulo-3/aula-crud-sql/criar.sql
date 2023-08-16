--Inserir registros na tabela produtos

insert into produtos (nome, descricao, preco, categoria)
values
('Camisa', NULL, 4990, 'Roupas');

--Inserir vários registros de uma só vez

insert into produtos (nome, descricao, preco, categoria)
values 
('camisa', NULL, 4990, 'Roupas'),
('Calça', NULL, 11990, 'Roupas'),
('Bermuda', NULL, 8990, 'Roupas');