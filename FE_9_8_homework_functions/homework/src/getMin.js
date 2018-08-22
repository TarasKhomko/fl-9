function getMin(){
	let minEl = arguments[0];
	for(let i = 1; i< arguments.length; i++){	
		if(arguments[i]<minEl) {
				minEl = arguments[i];	
			}
	}
	return minEl;
}


