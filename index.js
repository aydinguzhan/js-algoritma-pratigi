import { v4 as uuidv4 } from "uuid";

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
  let filterOfValue = [];
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

let arr = [1, 2, 3, 4, 5, 6];

let results = arr.map((item) => item * 2);

//map , filter , forEach , join

let arr2 = ["ali", 1, 2, "orhan"];

let example = [{ ilkSiraNo: "ab1c123", sonSiraNo: "ab3c125" }];

let str = [];
let num = [];

arr2.forEach((item) => {
  if (isNaN(item)) {
    str.push(item);
  } else {
    num.push(item);
  }
});

// console.log("str", str);
// console.log("num", num);

// girilen string değerin terten yazılması

function reserveString(val) {
  if (typeof val === "string") {
    let value = [...val];

    let reverseString = value.reverse();
    let results = reverseString.join("");
    return results;
  } else if (typeof val === "number") {
    let value = val.toString();

    let arrayOfString = [...value];
    let reverseString = arrayOfString.reverse();
    let results = reverseString.join("");
    return results;
  } else {
    return "Değer string veya Number olmalıdır";
  }
}

//console.log(reserveString(true));

// şirket içerisinde yöneticilerin ve genel personel maaşlarını hesaplayan kısa class örneği
//pek muhasebeyle aram yok mantık hatalı olabilir burada inherid işlemine dikkat

class Company {
  constructor(personCout) {
    this.personCout = personCout;
    let salary = 0;
  }
  totalSalary(salary, tax = 0) {
    let totalResults = salary * this.personCout;
    return totalResults - tax;
  }
}

class Administrator extends Company {
  constructor(personCout) {
    super(personCout);
  }
}

let c1 = new Company(1);
let c2 = new Administrator(1);

// console.log(c1.totalSalary(100));
// console.log(c2.totalSalary(500, 100));

// uniq bir key oluşturarak bu keyin çözümlmesiyle içerideki bilgileri alalım

function generetaUuid(siraNo) {
  let addSiraNum = "";
  //36 karakterli bir string ifade dönmektedir. Buradaki ifadeyi parçalayarak başlayalım
  let spliteUuid = uuidv4().split("-");

  //Oluşan dizsideki son dizge 12 karakterlidir. Bize verilecek sıra numarasının maksimum 100 olacağını varsayarak bu uuid ye sondan ekleyelim
  let lastElem = spliteUuid[spliteUuid.length - 1];

  // ssira numarasının kontrol edelim
  if (siraNo <= 100) {
    // son 3 karakterin sıra numaramız olacağını biliyoruz . basamak sayısı kadar son dizgeye sıra numaramızı ekleyelim ve gerşye kalan ifadeleri 0 ile dolduralım
    addSiraNum = lastElem + siraNo.toString().padStart(4, "0");
    return addSiraNum;
  } else {
    return "HATALI SIRA NUMARSI GİRİŞİ !";
  }
}

console.log(generetaUuid(10));
