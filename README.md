# 💧 Water Bill Calculator

## 🎯 Sobre

Este projeto é uma solução completa para cálculo de consumo de água com base em **faixas de tarifação em cascata**. Ele foi desenvolvido como parte de um desafio técnico, com o objetivo de demonstrar domínio na construção de aplicações fullstack, utilizando **.NET Core no backend** e **Ext JS no frontend**.

A aplicação permite ao usuário informar o consumo de água em metros cúbicos e recebe como retorno o detalhamento do cálculo por faixa de consumo, conforme a lógica estipulada no enunciado.

> ⚠️ Este projeto foi desenvolvido em ambiente Windows com **Visual Studio**, conforme especificado no desafio, garantindo compatibilidade com o ambiente interno da empresa proponente.

## ✨ Funcionalidades

✔️ Inserção da quantidade de metros cúbicos consumidos;  
✔️ Cálculo automático baseado em faixas de cobrança;  
✔️ Exibição detalhada do cálculo por faixa (quantidade x tarifa);  
✔️ Interface simples, direta e funcional;  
✔️ Código limpo, modularizado e com separação clara entre frontend e backend.

## 🔧 Tecnologias Utilizadas

### Backend

- C#
- ASP.NET Core 2.3.0
- .NET 9.0
- Visual Studio
- **Railway** (deploy da API)

### Frontend

- JavaScript
- Ext JS
- Sencha CMD
- **Vercel** (deploy do frontend)

## 🌐 Aplicação Online

Você pode acessar a aplicação em produção aqui:  
🔗 [https://water-consumption-calculator.vercel.app/](https://water-consumption-calculator.vercel.app/)

## 📁 Estrutura do Repositório

- `Api/` – Projeto ASP.NET Core com a lógica de cálculo  
- `App/` – Aplicação em Ext JS com a interface de usuário  
- `README.md` – Documentação geral do projeto (este arquivo)

> Cada pasta (`Api/` e `App/`) contém seu próprio README com instruções específicas de execução, rotas e informações técnicas.

## 📅 Observações

- As faixas de cobrança estão definidas diretamente no backend, conforme permitido nas instruções do desafio;
- O projeto segue boas práticas de código limpo e organização;
- A entrega está separada por camadas, com frontend e backend desacoplados;
- A aplicação respeita os critérios exigidos: lógica correta, separação de responsabilidades, interface funcional e uso adequado de Git;
- O deploy da **API foi realizado via Railway** e o deploy do **Frontend via Vercel**, com variáveis de ambiente configuradas.

## 📌 Exemplo de Cálculo

Consumo informado: **25 m³**

Faixas aplicadas:

- 10 m³ × R$ 2,00 = R$ 20,00  
- 10 m³ × R$ 3,00 = R$ 30,00  
- 5 m³ × R$ 5,00 = R$ 25,00  

**Total: R$ 75,00**

---
