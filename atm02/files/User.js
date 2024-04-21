class User {
    id;
    pin;
    balance;
    constructor(userId, password, balance) {
        this.id = userId;
        this.pin = password;
        this.balance = balance;
    }
}
export default User;
