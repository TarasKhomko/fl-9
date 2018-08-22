function reverseNumber(a){
	let minus = -1;
	if (a < 0) {
		a = a *minus;
		a = String(a);
		let c = a.split('').reverse().join('');
	c =	parseInt(c)*minus;
	return c;
	}else {
		a = String(a);
		let c = a.split('').reverse().join('');
	c =	parseInt(c);
	return c;
	}
}
