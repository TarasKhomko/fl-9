function getClosestToZero(){
	let minEl = arguments[0] ;
	for(let i = 1; i< arguments.length; i++){
		if(Math.abs(arguments[i])< Math.abs(minEl) ) {
			minEl = arguments[i];
			}
	}
	return minEl;
}
