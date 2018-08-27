

function findType(input) {
  let output = typeof input;
  return output;
}

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    func(el);
  }
}

function map(arr, func) {
  let arrN = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    arrN.push(func(el));
  }
  return arrN;
}

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

function getAdultAppleLovers(data) {
  let obj = filter(data, function(data) {
    return data.age > 18 && data.favoriteFruit === 'apple'
  });

return map(obj, obj => obj.name);

}

function keys(obj){
    let arrN = [];
    for(let el in obj){
          if ({}.hasOwnProperty.call(obj, el)) {
        arrN.push(el);
      }
    }
    return arrN;
}

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

function showFormattedDate(data) {
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let output = `It is ${data.getDate()} of ${months[data.getMonth()]}, ${data.getFullYear()}`;
  return output;
}
