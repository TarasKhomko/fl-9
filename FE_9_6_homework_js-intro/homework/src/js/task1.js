let price = prompt( 'Enter price', '0');
let discount = prompt( 'Enter discount','0');
price = Math.trunc(parseFloat(price) * 100) / 100;
discount = Math.trunc(parseFloat(discount) * 100) / 100;

let maxDiscount = 100;
let priceDicount = price - price * ( discount / 100);
let saved = price - priceDicount;
  console.log( price < 0 || discount > maxDiscount ? 'Invalid data': 'Price without discount: ' + price +
  '\n' + 'Discount: ' + discount+'%'+
  '\n' + 'Price with discount: '+ parseFloat(priceDicount.toFixed(2))+
  '\n' + 'Saved: ' + parseFloat(saved.toFixed(2))
   );
