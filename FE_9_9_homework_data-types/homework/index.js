
//1.
function findType() {
  let input = 0;
  let output = typeof arguments[input]
  return output;
}
//2
function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    func(el);
  }
}
//3
function map(arr, func) {
  let arrN = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    arrN.push(func(el));
  }
  return arrN;
}
//4
function filter(arr, func) {
  let arrN = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (func(el)) {
      arrN.push(el);
    }
  }
  return arrN;
}
//5
function getAdultAppleLovers(data) {
  let arrN = [];
  for (let i = 0; i < data.length; i++) {
    let el = data[i];
    if (data[i].age > 18 && data[i].favoriteFruit === 'apple') {
      arrN.push(el.name);
    }
  }
  return arrN;
}
//6
function keys(obj){
    let arrN = [];
    let el = null;
    for(el in obj){
          if ({}.hasOwnProperty.call(obj, el)) {
        arrN.push(el);
      }
    }
    return arrN;
}
//7
function values(obj){
  let arrN = [];
  let el = null;
  for(el in obj){
        if ({}.hasOwnProperty.call(obj, el)) {
      arrN.push(obj[el]);
    }
  }
  return arrN;
}
//8
function showFormattedDate() {
  let month = 1;
  let number = 2;
  let year = 3
  let input = 0;
  let data = String(arguments[input]).split(' ');
  let output = `It is ${data[number]} of ${data[month]}, ${data[year]}`;
  return output;
}
