class User {
  id: string;
  pin: string;
  balance: number;

  constructor(userId: string, password: string, balance: number) {
    this.id = userId;
    this.pin = password;
    this.balance = balance;
  }
}

export default User;
