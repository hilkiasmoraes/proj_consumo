# ⚡ API de Monitoramento de Consumo de Energia (ODS 7)

API desenvolvida como projeto acadêmico para a disciplina de **Web Mobile**, no curso de **Análise e Desenvolvimento de Sistemas** da **Universidade Presbiteriana Mackenzie**.

O objetivo é promover o uso consciente de energia elétrica e contribuir com o **Objetivo de Desenvolvimento Sustentável (ODS) 7** da ONU:
**"Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos."**

👤 Desenvolvido por: **Hilkias Santos de Moraes**

---

## ⚙️ Funcionalidades

- 🔌 **Registro de Consumo**: Permite registrar mensalmente o consumo de energia de um usuário (kWh + data).
- 📈 **Consulta de Histórico**: Consulta os registros de consumo em um intervalo de datas especificado.
- 🚨 **Alerta de Consumo Elevado**: Verifica se o consumo do mês atual foi superior ao do mês anterior e retorna um alerta.

---

## 🛠️ Tecnologias Utilizadas

- **Back-end**: NestJS, TypeScript, Node.js
- **Banco de Dados**: MongoDB Atlas (online)
- **Testes**: Postman

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos

- Node.js instalado
- MongoDB Atlas com conexão configurada
- NestJS CLI:
```bash
npm install -g @nestjs/cli
```

---

### 2. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

---

### 3. Instalar as dependências

```bash
npm install
```

---

### 4. Configurar a conexão com o MongoDB

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:
```bash
MONGODB_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

---

### 5. Iniciar o servidor

```bash
npm run start
```

A aplicação estará disponível em:
[http://localhost:3000](http://localhost:3000)

---

## 📮 Endpoints da API

> Base URL: `http://localhost:3000/consumo`

---

### 🔌 Registrar Consumo

- **POST** `/consumo`

**Exemplo de JSON no corpo (body):**
```json
{
  "usuarioId": "usuario123",
  "quantidadeKwh": 280,
  "dataLeitura": "2025-05-01"
}
```

---

### 📈 Consultar Histórico

- **GET** `/consumo?usuarioId=usuario123&inicio=2025-05-01&fim=2025-06-30`

Retorna os registros de consumo do usuário no intervalo informado.

---

### 🚨 Verificar Alerta

- **GET** `/consumo/alerta?usuarioId=usuario123`

Retorna um alerta se o consumo mais recente for maior que o anterior (requer pelo menos dois registros).

---

## 📁 Estrutura do Projeto

```
src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
└── consumo_energia
    ├── consumo_energia.controller.spec.ts
    ├── consumo_energia.controller.ts
    ├── consumo_energia.model.ts
    ├── consumo_energia.module.ts
    ├── consumo_energia.service.spec.ts
    └── consumo_energia.service.ts
```

---

## 📌 Observações

Este projeto é **educacional** e foi desenvolvido para aplicar os conceitos aprendidos em **NestJS, REST APIs** e integração com banco de dados na nuvem **MongoDB Atlas**.

Todas as rotas foram testadas via Postman com dados reais.