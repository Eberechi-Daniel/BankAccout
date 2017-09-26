//OOP implementation of a Bank Account functionality.
"use strict";

// BankAccount is a base class
class BankAccount {
    
    //initializes a user 
    constructor (name) { 
      this.name = name;
      this.accountNumber = "";
      this.balance = 0;
      for(let i=0; i<10; i++){
        const number = Math.floor(Math.random() * (10));
        //generate a 10 digit account number for user
        this.accountNumber = this.accountNumber += number;
      }
      
      return this.accountNumber;
    }
    
    deposit(amount){
      this.amount = amount;
      this.balance = this.balance + this.amount;
      console.log ("Deposit of " + this.amount +  " was successful");
      return ;
    }
    
    withdraw(amount){
      this.amount = amount;
      this.balance = this.balance - this.amount;
    }
    
    getBalance(){
      return (this.balance);
    }
}

//MinimumBalanceAccount class inherits functions and attributes from BankAccount class
class MinimumBalanceAccount extends BankAccount {
  constructor(minimumBalance){
    super (name);
    this.minimumBalance = minimumBalance;
  }
  
  withdraw (amount){
    this.amount = amount;
    if (this.balance - this.amount < this.minimumBalance){
      console.log("The process could not be completed because the minimum balance must be maintained");
    }else{
      super.withdraw(this.amount);
    }
  }
}

const user = new MinimumBalanceAccount(7000); //object of the MinimumBalanceAccount
console.log(user.deposit(5000));// using MinimumBalanceAccount object to access the Base class methods.
console.log(user.accountNumber);