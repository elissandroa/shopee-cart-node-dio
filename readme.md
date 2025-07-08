# 🛒 Shopee Cart Node - DIO

Seja bem-vindo ao **Shopee Cart Node**, um projeto desenvolvido como desafio prático na formação da DIO (Digital Innovation One)!  
Aqui, você encontrará uma API robusta para gerenciamento de carrinho de compras, desenvolvida 100% em **Node.js** e **JavaScript**, com foco em boas práticas, arquitetura limpa e escalabilidade.

## 🚀 Sobre o Projeto

O objetivo deste projeto é simular, de forma didática e profissional, o backend de um sistema de carrinho de compras, inspirado em grandes e-commerces como a Shopee.  
Ideal para quem deseja entender como estruturar uma API RESTful utilizando Node.js, com rotas bem definidas, validações, manipulação de dados em memória e uma organização de código que favorece manutenção e testes.

## ✨ Principais Funcionalidades

- Adicionar, remover e listar produtos no carrinho
- Atualização de quantidades e remoção individual
- Cálculo automático de totais
- Estrutura de rotas RESTful utilizando Express
- Validações completas de entrada de dados
- Respostas claras e amigáveis para cada operação
- Código comentado e fácil de entender

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- JavaScript (100%)
- [Nodemon](https://nodemon.io/) (para desenvolvimento)

## 📁 Estrutura do Projeto

```
shopee-cart-node-dio/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── app.js
├── package.json
└── README.md
```

## 🏆 Destaques do Projeto

- **Organização Profissional:** Separação entre rotas, controllers e modelos, seguindo padrões do mercado.
- **Documentação Clara:** Cada endpoint possui comentários explicativos.
- **Fácil Evolução:** Pronto para receber integração com banco de dados e autenticação JWT.
- **Código Limpo e Legível:** Aplicação dos princípios do Clean Code.

## 📦 Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/elissandroa/shopee-cart-node-dio.git
   cd shopee-cart-node-dio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie a aplicação:**
   ```bash
   npm start
   ```
   Ou para desenvolvimento:
   ```bash
   npm run dev
   ```

4. **Acesse a API:**
   - Por padrão, ela estará rodando em `http://localhost:3000`

## 🧪 Exemplos de Uso

- **Adicionar produto ao carrinho:**  
  `POST /cart`  
  ```json
  {
    "productId": "12345",
    "name": "Tênis Esportivo",
    "price": 149.90,
    "quantity": 1
  }
  ```

- **Listar produtos:**  
  `GET /cart`

- **Remover produto:**  
  `DELETE /cart/:productId`

## 💡 O que você encontra aqui:

- Proatividade em projetos open-source
- Adoção de boas práticas de desenvolvimento
- Sólidos conhecimentos em Node.js e JavaScript
- Facilidade de comunicação e documentação

---

## 👤 Autor

Feito com dedicação por **Elissandro Aparecido Anastácio**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/elissandroa/)

---

## ⭐ Vamos conversar?

Se você é recrutador, líder técnico ou entusiasta, fique à vontade para abrir issues, sugerir melhorias ou entrar em contato!  
**Este repositório está aberto para oportunidades e colaborações!**

---
