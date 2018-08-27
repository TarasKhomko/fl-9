
//1.
function findType(input) {
  let output = typeof input;
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
  let obj = filter(data, function(data) {
    return data.age > 18 && data.favoriteFruit === 'apple'
  });

return map(obj, obj => obj.name);

}
//6
function keys(obj){
    let arrN = [];
    for(let el in obj){
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
function showFormattedDate(data) {
  let month = 1;
  let number = 2;
  let year = 3;
  let dataN = String(data).split(' ');
  let output = `It is ${dataN[number]} of ${dataN[month]}, ${dataN[year]}`;
  return output;
}
