-- Excluir o produto com id 2

delete from produtos where id = 2

-- Excluir todos os produtos 
-- Sem descrição

delete from produtos where descricao is null;