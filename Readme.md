# Desenvolvendo o Dio Bank
desenvolvido por [Nathally Souza](https://github.com/nathyts)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm run dev

#### Desafios
[ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[ ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

[ ] Todos os atributos de qualquer conta devem ser privados

[ ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[ ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.
