# Sistema de Gerenciamento de uma Livraria
![telas](https://github.com/Romulo-Americo/bookstore_management-full-project/blob/main/Telas/Login.png)
![telas](https://github.com/Romulo-Americo/bookstore_management-full-project/blob/main/Telas/Situação.png)
![telas](https://github.com/Romulo-Americo/bookstore_management-full-project/blob/main/Telas/ListaFuncionario.png)
![telas](https://github.com/Romulo-Americo/bookstore_management-full-project/blob/main/Telas/ListaLivro.png)
![telas](https://github.com/Romulo-Americo/bookstore_management-full-project/blob/main/Telas/CadastroLivro.png)
![telas](https://github.com/Romulo-Americo/bookstore_management-full-project/blob/main/Telas/ListaCliente.png)
![telas](https://github.com/Romulo-Americo/bookstore_management-full-project/blob/main/Telas/CadastroCliente.png)

## O que o sistema faz?

O sistema gerencia uma livraria onde clientes podem comprar ou alugar livros. As principais funcionalidades incluem:

- Aluguel de livros (máximo 2 por cliente, com prazo de 30 dias).
- Aplicação de multa por atraso (5% do valor do aluguel por dia).
- Cobrança de taxa por danos nos livros alugados.
- Sistema de pontos para clientes:
  - Início com 5 pontos.
  - Perda de pontos por atraso ou dano nos livros.
  - Ganho de pontos por entrega pontual ou antecipada.
  - Desativação de cadastro se os pontos chegarem a zero (reabilitação após 4 meses).
- Avaliação dos livros no ato da entrega.
- Parte administrativa para funcionários:
  - Verificação de cópias disponíveis.
  - Verificação de avaliações dos livros.
  - Registro dos livros mais vendidos.
  - Inclusão de novos livros (20 cópias e avaliação inicial de 1 estrela).

## Entidades

### Livro

- Autor(es)
  - Nome
  - Idade
  - Breve biografia
- Preço
- Coletânea/ Volume único
- Quantidade de cópias
- Título do livro
- Ano de lançamento
- Gênero
- Avaliação (1 a 5 estrelas)

### Funcionário

- Matrícula
- Senha
- Nome
- Email
- Situação
- Tipo de funcionário
  - Gerente
  - Funcionário

### Cliente

- Matrícula
- Nome
- Endereço
- Telefone
- Email
- Pontos
- Situação
- Quantidade de livros já alugados
- Livros alugados
- Dia do aluguel do livro
- Entrega do livro alugado
- Prazo

## CRUD

### Livros

- **Create:** Adicionar novos livros com quantidade inicial de 20 cópias e avaliação de 1 estrela.
- **Read:** Visualizar detalhes dos livros, incluindo cópias disponíveis e avaliações.
- **Update:** Atualizar quantidade de cópias, tipo de livro (coletânea ou volume único) e outros detalhes.
- **Delete:** Remover livros do sistema.

### Clientes

- **Create:** Cadastro de novos clientes com informações básicas.
- **Read:** Visualizar detalhes dos clientes, incluindo pontos e livros alugados.
- **Update:** Atualizar pontos, situação (ativo/inativo), endereço e dados de aluguel.
- **Delete:** Desativar cadastro ao zerar pontos, reativar após 4 meses.

### Funcionários

- **Create:** Cadastro de novos funcionários.
- **Read:** Visualizar detalhes dos funcionários.
- **Update:** Gerenciar situação e senhas dos funcionários (apenas gerentes).
- **Delete:** Remover funcionários do sistema (apenas gerentes).

### Autores

- **Create:** Cadastro de novos autores.
- **Read:** Visualizar detalhes dos autores.
- **Update:** Atualizar informações dos autores.
- **Delete:** Remover autores do sistema.

## Telas do Sistema

- [ ] Tela de login
- [ ] Tela de visualização de funcionários
- [ ] Tela de visualização de gerente
- [ ] Tela de cadastro de cliente
- [ ] Tela de cadastro de funcionário
- [ ] Tela para ver os funcionários
- [ ] Tela de cadastro de livro
- [ ] Tela para ver os livros
- [ ] Tela de detalhes do livro
- [ ] Tela para cadastrar autores
- [ ] Tela para visualizar os autores

## Tecnologias Utilizadas

- **Back-end**
  - Node.js
  - Express.js
  - Sequelize.js
- **Banco de Dados**
  - MySQL
- **Front-end**
  - React
 
  -**Como usar?**
  -Adicione o envfiles
  -Coloque as informações da verificação do Banco
  -Npm init
  -Npm start para o front-end e o back end
  -E fique livre para usar e ajustar ou até melhorar o meu sistema :)
