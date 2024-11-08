# gRPC API para Gerenciamento de Produtos

Este projeto implementa uma API gRPC básica para o gerenciamento de produtos, utilizando uma variável em memória como "banco de dados". A API permite criar, ler, atualizar e deletar produtos em várias categorias, incluindo:

- SMARTPHONE
- CAMERA
- LAPTOPS
- HEADPHONES
- CHARGERS
- SPEAKERS
- TELEVISIONS
- MODEMS
- KEYBOARDs
- MICROPHONES

## Índice

- [Instalação e Execução](#instalação-e-execução)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Uso da API](#uso-da-api)

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/Deimos177/grpc-api.git
   cd grpc-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto:
   ```bash
   npm run start
   ```

A API estará em execução e pronta para receber requisições gRPC.

## Estrutura de Pastas

- **Raiz do Projeto**: Contém arquivos de configuração, dependências e definições do projeto, como `.gitignore`, `package.json`, `package-lock.json` e a pasta `protos`.
- **protos**: Contém o arquivo `product.proto`, que define a estrutura dos serviços e métodos da API gRPC.
- **src**: Pasta principal que contém o código do servidor:
  - **server.js**: Arquivo principal que inicializa o servidor gRPC.
- **repository**: Contém o código de armazenamento dos produtos:
  - **productsRepo.js**: Implementa a lógica de armazenamento e manipulação dos produtos.
- **services**: Contém os serviços gRPC para operações de CRUD:
  - **createProduct.js**: Serviço para criar um novo produto.
  - **readProduct.js**: Serviço para ler um produto específico.
  - **readProducts.js**: Serviço para listar todos os produtos.
  - **updateProduct.js**: Serviço para atualizar informações de um produto.
  - **deleteProduct.js**: Serviço para deletar um produto.

## Uso da API

Para utilizar a API gRPC, siga os passos abaixo:

1. **Importe o Proto**:
   - No cliente gRPC de sua escolha (como Postman ou BloomRPC), importe o conteúdo do arquivo `product.proto`, localizado na pasta `protos`, que define a estrutura da API e dos métodos.

2. **Configuração das Requisições**:
   - Crie uma nova requisição gRPC, configurando a URL da aplicação e selecionando o método desejado da API de produtos que foi importada.

3. **Métodos Disponíveis**:
   - **createProduct**: Cria um novo produto na categoria especificada.
   - **readProduct**: Retorna os detalhes de um produto específico.
   - **readProducts**: Retorna uma lista de todos os produtos disponíveis.
   - **updateProduct**: Atualiza os detalhes de um produto existente.
   - **deleteProduct**: Remove um produto do "banco de dados".

Essas operações permitem gerenciar produtos de forma prática através do cliente gRPC.

---

Qualquer contribuição ou feedback é bem-vindo! Sinta-se à vontade para abrir issues ou fazer um pull request.