
# 📦 Frontend - Aplicação React

Este repositório contém o código-fonte do **frontend** da aplicação, desenvolvido em **React** e empacotado com Docker.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (para build)

---

## 📁 Estrutura do Projeto

```bash
frontend/
├── public/
├── src/
├── ── /components
├── ── /services
├── Dockerfile
├── package.json
└── ...
````

---

## 🚀 Como Rodar com Docker

### 1. Clonar o repositório (se necessário)

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd frontend
```

### 2. Build da imagem Docker

```bash
docker build -t minha-app-react .
```

### 3. Rodar o container

```bash
docker run -p 3000:80 minha-app-react
```

> A aplicação ficará disponível em `http://localhost:3000`

---


## 🧪 Scripts úteis (fora do Docker)

### Rodar localmente em modo de desenvolvimento

```bash
npm install
npm start
```

> Isso inicia o servidor de desenvolvimento em `http://localhost:3000`

---

## 📦 Build manual para produção

```bash
npm run build
```

Os arquivos finais de produção estarão em `build/`.

