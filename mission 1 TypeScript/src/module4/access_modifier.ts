class BankAccount {
  public name: string;
  private _balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this._balance = balance;
  }

  get balance(): string {
    return `current balance is ${this._balance}`;
  }
}

const bank = new BankAccount("sjibl", 300);
console.log(bank.balance);
