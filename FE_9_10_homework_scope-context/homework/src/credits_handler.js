const three = 3;
function userCard(key) {
  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];
  function date() {
    let d = new Date();
    let dateTime = `${d.toLocaleDateString().
        split('.').
        join('/')}, ${d.toLocaleTimeString()}`;
    return dateTime;
  }
  function putCredits(putCredit) {
    balance = balance + putCredit;
    historyLogs.push({
      operationType: 'Received credits',
      credits: putCredit,
      operationTime: date()
    });
  }

  function takeCredits(takeCredit) {
    balance = balance - takeCredit;
    historyLogs.push({
      operationType: 'Withdrawal of credits',
      credits: takeCredit,
      operationTime: date()
    });
  }

  function setTransactionLimit(limit) {
    transactionLimit = limit;
    historyLogs.push({
      operationType: 'Transaction limit change',
      credits: limit,
      operationTime: date()
    });
  }

  function transferCredits(sum, card) {
    let taxes = 0.005
    takeCredits(sum + sum*taxes);
    card.putCredits(sum);
  }

  function getCardOptions() {
    if (key<=three ) {
      let objOptions = {
        key: key,
        balance: balance,
        transactionLimit: transactionLimit,
        historyLogs: historyLogs
      };
      return objOptions;
    } else {
      console.log('error');
    }
  }
  let objCard = {
    getCardOptions: getCardOptions,
    putCredits: putCredits,
    takeCredits: takeCredits,
    setTransactionLimit: setTransactionLimit,
    transferCredits: transferCredits
  };
  return objCard;
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
addCard(){
      let key = 1;
      let cardUser = userCard(this.cards.length+key);
      if (this.cards.length !==three ) {
          this.cards.push(cardUser);
      } else {
          console.log('limit cards');
      }
      }
      getCardByKey(key){
        if(key<=three ){
          let one = 1;
          return this.cards[key-one];
        } else {
          console.log('error');
        }

      }
}
