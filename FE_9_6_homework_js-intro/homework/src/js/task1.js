let price = prompt( 'Enter price');
let discount = prompt( 'Enter discount');
let maxDiscount = 100;
let priceDicount = price - price * ( discount / 100);
let saved = price - priceDicount;
  console.log( price < 0 || discount > maxDiscount ? 'Invalid data': 'Price without discount: ' +price+
  '\n' + 'Discount: ' + discount+'%'+
  '\n' + 'Price with discount: '+ parseFloat(priceDicount.toFixed(2))+
  '\n' + 'Saved: ' + parseFloat(saved.toFixed(2))
   );