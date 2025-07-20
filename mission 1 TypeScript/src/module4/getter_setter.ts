class Bank {
  public name: string;
  private _balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this._balance = balance;
  }

  get balance(): string {
    return `current balance is ${this._balance}`;
  }

  set balance(taka: number) {
    this._balance += taka;
  }
}

const b = new Bank("sjibl", 300);
console.log(b.balance); // 300
b.balance = 500;
console.log(b.balance); // 800
