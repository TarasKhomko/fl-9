function userCard(key){
	let balance = 100;
	let transactionLimit = 100;
	let historyLogs = [];
	

	function date(){
	let d = new Date();
	let dateTime = `${d.toLocaleDateString().split('.').join('/')}, ${d.toLocaleTimeString()}`;
	return   dateTime ;
	}
	function putCredits(putCredit){
	balance = balance + putCredit;
	
	historyLogs.push({operationType: 'Received credits', credits: putCredit, operationTime: date() });
		
	}
	function takeCredits(takeCredit){
		balance = balance - takeCredit;
		historyLogs.push({operationType: 'Withdrawal of credits', credits: takeCredit, operationTime: date()  });
	}
	function setTransactionLimit(limit){
		transactionLimit = limit;
		historyLogs.push({operationType: 'Transaction limit change', credits: limit, operationTime: date()  });
	}
	function transferCredits(sum, card ){
		takeCredits(sum);
		card.putCredits(sum);
	}
	function getCardOptions(){
	let objOptions =  {
	key: key,
	balance:  balance,
    transactionLimit: transactionLimit,
    historyLogs: historyLogs
	};
	 return objOptions;
	console.log(objOptions);

	}

	let objCard =  {
		getCardOptions: getCardOptions,
		putCredits: putCredits,
		takeCredits: takeCredits,
		setTransactionLimit: setTransactionLimit,
		transferCredits: transferCredits
	};
	
return objCard;
console.log(objCard);
}

 