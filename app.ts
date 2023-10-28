import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Cristian', 5198006, true)
peopleAccount.deposit(100) // Depositar
console.log(`Saldo de ${peopleAccount.getName()}: R$ ${peopleAccount.getBalance()}`) // Mostrar saldo
peopleAccount.withdraw(10)
console.log(`Saldo de ${peopleAccount.getName()}: R$ ${peopleAccount.getBalance()}`) // Mostrar novo
console.log(peopleAccount)
console.log('')


const companyAccount: CompanyAccount = new CompanyAccount('MOTO', 51980026, true)
companyAccount.deposit(50) // Depositar
console.log(`Saldo de ${companyAccount.getName()}: R$ ${companyAccount.getBalance()}`) // Mostrar saldo
companyAccount.getLoan(5000) // Pegar Empréstimo
console.log(companyAccount)
console.log('')
