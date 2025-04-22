# Validação de CPF

Este é um projeto simples de validação de CPF usando HTML, CSS e JavaScript. A aplicação permite aos usuários inserir um CPF e verificar se ele é válido de acordo com o algoritmo de validação oficial.

## Funcionalidades

- Interface amigável para entrada de CPF
- Validação em tempo real
- Feedback visual indicando se o CPF é válido ou inválido
- Formatação automática do CPF (XXX.XXX.XXX-XX)

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Como usar

1. Clone este repositório para seu ambiente local
2. Abra o arquivo `index.html` em um navegador web
3. Digite um CPF no campo de entrada
4. Clique no botão "Validar CPF" para verificar a validade

## Estrutura do Projeto

- `index.html` - Estrutura da página web
- `styles.css` - Estilização da interface
- `script.js` - Lógica de validação do CPF

## Como funciona a validação

O algoritmo de validação do CPF segue os seguintes passos:

1. Remove caracteres não numéricos do CPF
2. Verifica se o CPF tem 11 dígitos
3. Calcula o primeiro dígito verificador usando a fórmula oficial
4. Calcula o segundo dígito verificador
5. Compara os dígitos calculados com os dígitos informados
