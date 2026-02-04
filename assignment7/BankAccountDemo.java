class BankAccount {
    private String cust_name;
    private double balance;

    // Constructor
    public BankAccount(String cust_name, double balance) {
        this.cust_name = cust_name;
        this.balance = balance;
    }

    // Deposit method
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + " deposited successfully.");
        } else {
            System.out.println("Invalid deposit amount!");
        }
    }

    // Withdraw method
    public void withdraw(double amount) {
        if (amount > balance) {
            throw new IllegalArgumentException("Error: Insufficient balance!");
        } else if (amount <= 0) {
            System.out.println("Invalid withdrawal amount!");
        } else {
            balance -= amount;
            System.out.println(amount + " withdrawn successfully.");
        }
    }

    // Get balance method
    public double get_balance() {
        return balance;
    }

    public String getCustomerName() {
        return cust_name;
    }
}

public class BankAccountDemo {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Madhusudan", 5000);

        System.out.println("Customer: " + acc.getCustomerName());
        System.out.println("Initial Balance: " + acc.get_balance());

        acc.deposit(2000);
        System.out.println("Balance: " + acc.get_balance());

        acc.withdraw(1000);
        System.out.println("Balance: " + acc.get_balance());

        // Uncomment below to test insufficient balance error
        // acc.withdraw(10000);
    }
}
