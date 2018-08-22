function isPrime(a){
	for (let i = 2; i<=Math.sqrt(a) ; i++) {
		return a%i!==0;		
	}
}