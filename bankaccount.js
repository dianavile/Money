/* En el següent exercici el nostre client és una entitat bancària. 
El banc vol que un client pugui donar d’alta, de baixa, veure informació o fer certes operacions en un compte corrent. 
FET 1) CLASE: Compte
FET 2) ATTRIBUTOS: Titular (nom + cognom), saldo, nombre de compte i el nombre de transaccions realitzades.
3) METODES: ingresar euros(), retirar euros(), retornar saldo(), veure transaccions(), veure compte().
4) comportamiento METHODOS:
FET ● ingresar euros() = permet fer un ingrés al saldo del compte.
FET ● retirar euros() = permet treure euros del saldo del compte
FET retornar saldo() = retorna el saldo total del compte
FET veure transaccions()= retorna el nombre de transaccions que s’han fet amb el compte
FET  veure compte() = mostra per pantalla totes les dades del compte*/
let holder = [];

class Bankaccount {
  // Constructor
  constructor(holder, deposit, accountnumber, transaccions) {
    this._holder = `${this.name} + ${this.familyname}`;
    this._deposit = deposit;
    this._accountnumber = accountnumber;
    this._transaccions = transaccions;
  }
  /*
  set holder() {
    return this._holder;
  }
  set deposit() {
    return this._deposit;
  }
  set accountnumber() {
    return this._accountnumber;
  }
  set transaccions() {
    return this._transaccions;
  }*/
  get holder() {
    return this._holder;
  }
  get deposit() {
    return this._deposit;
  }
  get accountnumber() {
    return this._accountnumber;
  }
  get transaccions() {
    return this._transaccions;
  }
  //to enter money into to the Bankaccount
  deposit() {
    if ((this._deposit = 50)) {
      this._deposit += parseInt(amount); //add money to bankAccount
      this._transaccions += 1;
      console.log(this);
    } else {
      console.log("Please enter 50 euros to this account is" + this._deposit);
    }
  }
  //to withdraw money from the Bankaccount
  withdraw(amount) {
    //conditional. if-else statement
    if (this._deposit > amount) {
      this._deposital -= parseInt(amount); //withdraw money from bankAccount
      this._transaccions += 1;
    } else {
      console.log("The actual balance of this account is" + this._withdraw);
    }
    console.log(this);
    //to check the deposit of the Bankaccount
    //Balance(){
    console.log(
      "The actual balance of this account is" + this._deposit - this._withdraw
    );
  }
  //retorna el saldo total del compte
  balance() {
    if ((this._deposit = deposit && this._withdraw < this._deposit)) {
      console.log(
        "Your bankaccount contains: " + (this._deposit - this.__withdraw)
      );
    }
  }

  //to show the number of transactions of the Banaccount
  transactions() {
    console.log(
      "The actual number of transactions of this account is" +
        this._transactions
    );
  }
  //to show all the data of the Bankaccount
  showAccount() {
    console.log(
      "Your Bankaccount data are:"[
        +this._holder + this._deposit + this._accountnumber + this._transaccions
      ]
    );
  }
}
