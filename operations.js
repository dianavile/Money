//METHODS-CRUD
const Accounts = [];

/*Abans de crear el compte, hem d’estar segurs que no hi ha cap compte que tingui el mateix titular i
el mateix nombre de compte.Si un titular ja té aquest nombre de compte, hem d’informar a l’usuari
dient - li que el compte no es crearà perquè ja té un compte amb aquest nombre i li mostrarem totes
les dades d’aquest compte */

let deposit = this.deposit;
let widthdraw = this.widthdraw;
let transactions = this._transactions;
let account = this._account;

function createAccount() {
  //Per donar d’alta un compte, el client ha d’omplir les següents dades: nom, cognom i nombre decompte.
  let holder = prompt("Holder: Enter name and familyname:");
  let deposit = prompt("Deposit: 50 euros");
  let accountnumber = prompt("Accountnumber:");
  let transaccion = prompt("Transaction: 0");

  let AccountsFound = false;

  for (Bankaccount of Accounts) {
    if (
      Bankaccount.holder == holder &&
      Bankaccount.accountnumber == accountnumber
    ) {
      BankaccountFound = true;
      //Quan es crea un compte, la qüantitat sempre és 50€ i el nombre de transaccions és 0.
      let option = prompt(
        "Choose an option:\n 1.Create Account\n 2.Manage an Account"
      );
    } else {
      prompt("This account already exists in our application.");
    }

    if (!BankaccountFound) {
      myAccount = new Bankaccount(holder, deposit, accountnumber, transaccion);
      deposit = new Deposit(50);
      transactions = new Transactions(0);
      Bankaccount.push(myAccount);
    } else {
      console.log("This account already exists in our application.");
    }
    console.log(myAccount);
  }
}

/* Per veure un compte, li demanarem a l’usuari que introdueixi nom, cognom i nombre de compte.
  Si el compte existeix, li mostrarem a l’usuari tota la informació del compte.
  Si el compte no existeix, informarem a l’usuari que el compte no existeix 
  i li mostrarem tots els seus comptes.
*/
//to show the number of transactions of the Bankaccount
function showAccount() {
  let holder = prompt("Introduce your name, familyname:");
  let accountnumber = prompt("Introduce your accountnumber:");

  for (let i = 0; i < Accounts.length; i++) {
    if (Accounts[i].holder === holder) {
      console.log(Accounts[i].holder);
      console.log(Accounts[i].accountnumber);
    }
  }
  let BankaccountFound = false;
  //for of Loop
  for (Bankaccount of Accounts) {
    if (Bankaccount.holder == holder) {
      BankaccountFound = true;
      console.log(Bankaccount.holder);
      console.log(Bankaccount.deposit);
      console.log(Bankaccount.accountnumber);
      console.log(Bankaccount.transaccions);
      console.log(Bankaccount.toString());
    }
  }
  if (!BankaccountFound) {
    console.log("This account does NOT exist in our application.");
    console.log(Bankaccount.Account);
  }
}

/*Si l’usuari vol fer operacions amb el compte corrent,
  primer ha d’introduir el compte amb el que vol operar
  i llavors ha de poder ingresar, retirar, veure transaccions i veure compte.
    Si el compte no existeix, s’ha d’informar a l’usuari de que el compte amb el que vol operar no existeix
    i se li han de mostrar tots els seus comptes.
*/

//to modify the Bankaccount
function modifyAccount() {
  let holder = prompt("Introduce the accountnumber you want to modify:");
  let option;

  //DO WHILE
  do {
    option = prompt(
      "Choose an option:\n 1.- deposit \n 2.- widthdraw\n 3.-transactions\n 4.-account\n"
    );
  } while (option > 4 || option < 1);

  let newValue = prompt("Introduce a new value to modify: ");
  let BankaccountFound = false;

  for (let i = 0; i < Accounts.length; i++) {
    if (Accounts[i].holder === holder) {
      BankaccountFound = true;

      switch (option) {
        case "1":
          Accounts[i].deposit = newValue;
          break;
        case "2":
          Accounts[i].widthdraw = newValue;
          break;
        case "3":
          Accounts[i].transactions = newValue;
          break;
        case "4":
          Accounts[i].account = newValue;
          break;
      }
    }
  }

  if (!BankaccountFound) {
    alert("This Bankaccount" + holder + "does not exist!");
  }
  console.log(Accounts);
}

/* Per donar de baixa un compte, li demanarem a l’usuari 
que introdueixi nom, cognom i nombre de compte.
Si el compte existeix, l’eliminarem i informarem a l’usuari que el compte ha estat eliminat.
Si el compte no existeix, informarem a l’usuari que el compte no existeix 
i mostrarem a l’usuari tots els comptes que té.
*/

//to delete the Bankaccount
function eliminateAccount() {
  this.holder = prompt(
    "Introduce your name and familyname of the account you want to delete:"
  );
  this.accountnumber = prompt(
    "Introduce the accountnumber you want to delete:"
  );
  let BankaccountFound = false;

  for (let i = 0; i < Accounts.length; i++) {
    if (Accounts[i].holder === holder) {
      BankaccountFound = true;
      Accounts.splice(i, 1);
    }
  }
  if (BankaccountFound) {
    alert("This Bankaccount" + holder + "has been deleted!");
  } else {
    alert("This Bankaccount" + holder + "does not exist!");
  }
  console.log(Accounts);
}
