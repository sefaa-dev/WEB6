// değişkenler

var degisken1 = 123;
console.log(degisken1);
degisken1 = "Kamil";
degisken1 = 3.14;
degisken1 = true;
degisken1 = [1, 2, 4, 5, 14];
degisken1 = {
  ad: "Kamil",
  soyad: "Fıdıl",
  yas: 43,
};
degisken1.telefon = "0522115458";
console.log(degisken1);

if (degisken1.yas > 40) {
  console.log("yaşı 40 dan büyüktür");
} else {
  console.log("yaşı 40  dan küçük");
}

var degisken2 = 5;

if (degisken2 === "5") {
  console.log("5 e eşittir");
} else {
  console.log("5 e eşit değil");
}
console.log(typeof 5);
console.log(typeof 5.5);
console.log(typeof "5.5");
console.log(typeof true);
console.log(typeof [1, 2, 34]);
console.log(degisken1);

/*
     == != === !== 
     > < >= <=
     !
     & | && ||
     + - * /
     ++ -- 
     += -=
     % mod alma

   */

var degisken3 = 5;
var sunucu = "5";

if (degisken3 === sunucu && typeof degisken3 == typeof sunucu) {
}

var dizi1 = [1, 2, 4, 3.14, true, "Kamil", { ad: "Kamil", soyad: "Fıdıl" }];

for (var i = 0; i < dizi1.length; i++) {
  console.log(dizi1[i]);
}

dizi1[10] = "Hıdır";