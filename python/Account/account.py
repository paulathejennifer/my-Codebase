class Account:
    def __init__(self, account_number, account_owner):
        self.account_number = account_number
        self.account_owner = account_owner
        self.transactions = []
        self.loan_balance = 0
        self.is_frozen = False
        self.minimum_balance = 0

def get_balance(self):
    if self.is_frozen is True:
        return "Account is frozen. Cannot get balance."
    balance = 0

    for transaction in self.transactions:
        t_type, amount = transaction[0], transaction[1]
        if t_type == "deposit":
            balance += amount
        elif t_type == "withdrawal":
            balance -= amount
    return balance

def deposit(self, amount):
    if self.is_frozen:
        return "Account is frozen. Deposit not allowed"
    
    if amount <= 0:
        return "Deposit amount must be from Ksh.1 and above"
    
    self.transactions.append("deposit", amount)
    new_balance = self.get_balance()
    return f"Deposit successful. New balance: {new_balance}"

def withdraw(self, amount):
    if self.is_frozen:
        return "Account is frozen. Withdrawal not allowed"
    
    if amount <= 50:
        return "Withdrawal amount must be above Ksh. 50"
    
    current_balance = self.get_balance()
    if current_balance - amount < self.minimum_balance:
        return "Insufficient funds or withdrawal would violate the minimum balanace"
    
    self.transactions.append("withdrawal", amount)
    new_balance = self.get_balance()
    return f"Withdrawal successful. New balance is {new_balance}"

def transfer_funds(self, other_account, amount):
    if self.is_frozen  or other_account.is_frozen:
        return "Transfer failed. One or both accounts are frozen"
    
    if amount <= 50:
        return "Amount must be above Ksh. 50"
    
    withdrawal_message = self.withdraw(amount)
    if "successful" in withdrawal_message:
        deposit_message = other_account.deposit(amount)
        if "successful" in deposit_message:
            return (f"Transfer of {amount} successful from"  f"{self.account_owner} {self.account_owner} to {self.other_account_owner} {self.other_account_number}" )
        else:
            self.deposit(amount)
            return "Transfer failed: " + deposit_message
         


