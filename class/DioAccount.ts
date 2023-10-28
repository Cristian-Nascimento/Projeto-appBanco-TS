export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true
  private value: number = 0

  constructor(name: string, accountNumber: number, status: boolean) {
    this.name = name
    this.accountNumber = accountNumber
    this.status = status
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): boolean => {
    if (this.validateStatus()) {
      this.balance += value // Atualize o saldo aqui
      return true // Retorne true para indicar que o depósito foi bem-sucedido
    }
    return false // Retorne false se a validação de status falhar
  }

  withdraw = (value: number): boolean => {
    if (this.validateStatus() && this.balance > value) {
      this.balance -= value // Atualizar o saldo aqui
      return true // Retornar verdadeiro para indicar que o saque foi bem-sucedido
    }
    throw new Error(`o valor solicitado ${value} é maior que o ${this.getBalance()}`)
  }

  public getBalance = (): number => {
    return this.balance
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
