import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number, status: boolean) {
    super(name, accountNumber, status);
  }

  getLoan = (loanAmount: number): void => {
    if (this.validateStatus()) {
      this.deposit(loanAmount)
      console.log(`Você pegou um empréstimo de: ${loanAmount}`);
    } else {
      console.log('Não é possível pegar um empréstimo. Conta inválida.');
    }
  }
}

