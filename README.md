# Serviço Assíncrono de Coleta de Dados Meteorológicos

## Descrição do Projeto

Este projeto é uma prova de conceito (POC) para um serviço assíncrono que coleta dados de uma API pública de previsão do tempo a cada minuto e os armazena em um banco de dados PostgreSQL. Além disso, os dados coletados são enviados para uma API pública gratuita para testes de envio de dados.

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados:

1. **Node.js** (versão 14.x ou superior)
2. **npm** (geralmente incluído com o Node.js)
3. **PostgreSQL** (servidor de banco de dados)
4. **Git** (para clonar o repositório)

## Passo a Passo para Configuração e Execução

### 1. Clonar o Repositório

Clone o repositório do GitHub para a sua máquina local usando o comando:

```bash
git clone git@github.com:betobrandaojr/cron-weather-collector-node.js.git

```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo \`.env\` na raiz do projeto e adicione suas credenciais de banco de dados PostgreSQL:

```bash
DB_USER=seu-usuario
DB_HOST=localhost
DB_NAME=seu-banco
DB_PASS=sua-senha
DB_PORT=5432
```

### 3. Instalar Dependências

Instale as dependências do projeto usando o npm:

```bash
npm install
```

### 4. Configurar o Banco de Dados

Certifique-se de que o servidor PostgreSQL está rodando e crie a tabela necessária:

```bash
CREATE TABLE weather_data (
  id SERIAL PRIMARY KEY,
  temperature REAL,
  windspeed REAL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Compilar o Código TypeScript

Compile o código TypeScript para JavaScript:

```bash
tsc
```

### 6. Executar o Projeto

Inicie o projeto usando o comando:

```bash
node dist/index.js
```

## Verificar os Dados Enviados

Para verificar os dados enviados, acesse a URL do Webhook que foi configurada no projeto. Você verá uma lista de requisições com os dados coletados.

## Descrição da API de Teste

Este projeto usa a [API JSONPlaceholder](https://jsonplaceholder.typicode.com/) para testar o envio de dados. JSONPlaceholder é uma API fake online gratuita usada para testes e prototipagem rápida. Os dados são enviados para o endpoint `/posts`, que simula o comportamento de uma API RESTful real.

