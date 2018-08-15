const a = prompt( 'Enter length a');
const b = prompt( 'Enter length b');
const angle = prompt( 'Enter angle');
const deg = 180;
const g = 0.5;
const angleRad = angle*(Math.PI/deg);
const c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2) - 2*a*b* Math.abs(Math.cos(angleRad)) );
const s = g*a*b*Math.sin(angleRad);
const p = parseFloat(a) + parseFloat(b) + parseFloat(c);
console.log( a<= 0 || b<=0 || angle <=0 || angle >=deg ? 'Invalid data' : 'c length: ' + parseFloat(c.toFixed(2)) +'\n'
	+ 'Triangle square: '+ parseFloat(s.toFixed(2)) + '\n'
	+ 'Triangle perimeter: ' + parseFloat(p.toFixed(2))
	);
