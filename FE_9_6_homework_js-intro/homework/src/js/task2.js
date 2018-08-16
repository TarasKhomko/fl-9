let a = prompt( 'Enter length a');
let b = prompt( 'Enter length b');
let angle = prompt( 'Enter angle');
a = Math.trunc(parseFloat(a) * 100) / 100;
b = Math.trunc(parseFloat(b) * 100) / 100;
console.log(a);

angle = parseFloat(angle);
let deg = 180;
let g = 0.5;
let angleRad = angle*(Math.PI/deg);
let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2) - 2*a*b* Math.abs(Math.cos(angleRad)) );
let s = g*a*b*Math.sin(angleRad);
let p = parseFloat(a) + parseFloat(b) + parseFloat(c);
console.log( a<= 0 || b<=0 || angle <=0 || angle >=deg ? 'Invalid data' : 'c length: ' + parseFloat(c.toFixed(2)) +'\n'
	+ 'Triangle square: '+ parseFloat(s.toFixed(2)) + '\n'
	+ 'Triangle perimeter: ' + parseFloat(p.toFixed(2))
	);
