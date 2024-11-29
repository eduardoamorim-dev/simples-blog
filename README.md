# Simple Blog CRUD

## Descrição

Este projeto é uma aplicação web simples de blog que demonstra operações CRUD (Create, Read, Update, Delete) usando React e Next.js. A aplicação consome a API JSONPlaceholder para simular um backend e permite aos usuários visualizar, adicionar, editar e excluir posts de blog.

## Funcionalidades

- Listar posts de blog
- Adicionar novos posts
- Editar posts existentes
- Excluir posts
- Interface responsiva e acessível

## Tecnologias Utilizadas

- React
- Next.js
- TypeScript
- Tailwind CSS
- JSONPlaceholder API

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 14 ou superior)
- npm (geralmente vem com o Node.js)

## Instalação

1. Clone o repositório:
```bash
 git clone https://github.com/seu-usuario/simple-blog-crud.git
```

2. Navegue até o diretório do projeto:

```bash
cd simple-blog-crud
  ```

3. Instale as dependências:

```bash
npm install
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.


## Componentes Principais

- app/page.tsx: Componente principal que gerencia o estado e as operações CRUD.
- components/AddPostForm.tsx: Formulário para adicionar novos posts.
- components/PostList.tsx: Lista todos os posts.
- components/PostItem.tsx: Representa um único post, com opções para editar e excluir.

## API

Este projeto utiliza a [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) para simular operações de backend. Note que as alterações não são persistidas no servidor da API.


## Licença

Distribuído sob a licença MIT. Veja \`LICENSE\` para mais informações.



