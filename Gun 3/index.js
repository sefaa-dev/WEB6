//fonksiyon

function ilkfunction1(sayi1, sayi2) {
    var toplam = sayi1 + sayi2;
    return toplam;
}

var toplam = ilkfunction1(4, 2);
console.log(toplam);

var ilkfunction2 = function (sayi1, sayi2) {
    return sayi1 + sayi2;
}

toplam = ilkfunction2(4, 5);





console.log(toplam);

var kisi = {
    ad: "Kamil",
    soyad: "Fıdıl",
    selamla: function () {

        return "Merhaba" + this.ad + " " + this.soyad;

    },
    toplam: ilkfunction1
};

function topla() {
    var toplam = 0;
    for (var i = 0; i < arguments.length; i++) {
        toplam += arguments[i];
    }
    return toplam;
}
console.log(topla(1, 2, 3, 4, 5));