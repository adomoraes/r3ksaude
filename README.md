# SPA R3K

Este repositório contém o código-fonte para o desenvolvimento de uma SPA com foco em disseminar conhecimento científico de maneira acessível e educativa.

**Produção**

```bash
https://adomoraes.github.io/r3k/
```

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Ferramenta de build rápida e otimizada para projetos web.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **React Router**: Biblioteca para gerenciamento de rotas em aplicações React.

## Funcionalidades

- **Áudio Player**: Card de áudio player para execução.
- **Responsividade**: Interface adaptada para diferentes dispositivos (desktop, tablet, mobile).

## Estrutura do Projeto

```plaintext
|-- src/
|   |-- pages/
|       |-- Canais.jsx
|       |-- Cases.jsx
|       |-- OQueE.jsx
|       |-- QuemSomos.jsx
|   |-- App.jsx
|   |-- AppRouter.jsx
|   |-- CardPlayer.jsx
|   |-- Footer.jsx
|   |-- index.css
|   |-- main.jsx
|   |-- NavBar.jsx
|-- README.md
```

## Instalação e Execução

1. **Instalar Node:**

   ```bash
   # installs nvm (Node Version Manager)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

   # download and install Node.js (you may need to restart the terminal)
   nvm install 20

   # verifies the right Node.js version is in the environment
   node -v # should print `v20.16.0`

   # verifies the right npm version is in the environment
   npm -v # should print `10.8.1`
   ```

2. **Instalar Vite: (https://www.npmjs.com/package/vite)**

   ```bash
   npm i vite
   ```

3. **Clone o repositório:**

   ```bash
   git clone https://github.com/adomoraes/r3k.git
   cd brasilcnpj
   ```

4. **Instale as dependências:**

   ```bash
   npm install
   ```

5. **Execute o projeto:**

   ```bash
   npm run dev
   ```

6. **Acesse a aplicação:**
   - Acesse `http://localhost:5173` no seu navegador. (verificar a port disponibilizada pelo Vite)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
