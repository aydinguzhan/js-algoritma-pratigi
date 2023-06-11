// a ile b arasındaki tamsayıların çarpımını hesağlayan program
function multiplication(val1, val2) {
  let results = 1;
  if (val1 < val2) {
    for (let i = val1; i <= val2; i++) {
      results = results * i;
    }
  } else {
    for (let i = val2; i <= val1; i++) {
      results = results * i;
    }
  }
  return results;
}

let sonuc = multiplication(5, 1);

//a ile b sayılarının arasında 23 'ün katı olan sayıların toplamını veren js kodu

function mutiplesofValue(start, end, value) {
  filterOfValue = [];
  for (let i = start; i <= end; i++) {
    if (i % 23) {
      continue;
    } else {
      filterOfValue.push(i);
    }
  }

  let sonuc = filterOfValue.reduce((total, num) => {
    return total + num;
  }, 0);

  return sonuc;
}

let mutipleResult = mutiplesofValue(23, 69);

// bir dizinin içerisindeki en küçüğünü ekrana yazdıran js kodu nedir ?

let testOfArray = [1, 2, 3, -1, 5, 6, -10, -8, 9];

function smallestNumber(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr[0];
}

let smallestNum = smallestNumber(testOfArray);

//girilen string ifadenin içerisindeki sayıları ekrana yazdıran js kodu

function findNumber(str) {
  let arr = [...str];
  let num = [];
  arr.forEach((item) => {
    if (!isNaN(+item)) {
      num.push(item);
    } else {
      return;
    }
  });
  return num;
}

//console.log(findNumber("12abcd23"));
