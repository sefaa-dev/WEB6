// fonksiyon

function ilkFunction1(sayi1, sayi2) {
    var toplam = sayi1 + sayi2;
    return toplam;
  }
  
  var toplam = ilkFunction1(4, 2);
  console.log(toplam);
  
  var ilkFunction2 = function (sayi1, sayi2) {
    return sayi1 + sayi2;
  };
  var ad = "Hıdır";
  toplam = ilkFunction2(4, 5);
  console.log(toplam);
  
  var kisi = {
    ad: "Kamil",
    soyad: "Fıdıl",
    selamla: function () {
      return "Merhaba " + this.ad + " " + this.soyad;
    },
    toplam: ilkFunction1,
  };
  
  function topla() {
    //   var toplam = 0;
    //   for (var i = 0; i < arguments.length; i++) {
    //     toplam += arguments[i];
    //   }
    //   return toplam;
    var sayi1 = parseFloat(document.getElementById("txt-sayi1").value);
    var sayi2 = parseFloat(document.getElementById("txt-sayi2").value);
      document.getElementById("lbl-sonuc").innerHTML =
          `Sonuç: <strong>${sayi1 + sayi2}</strong>`;
  }
  
  //console.log(topla(1, 2, 3, 4, 5));
  //document.getElementById("dv-kutu").style.backgroundColor = "rgb(54, 150, 25)";
  
  var renklendir = function () {
      var red = document.getElementById("rng-red").value;
      var yellow = document.getElementById("rng-yellow").value;
      var blue = document.getElementById("rng-blue").value;
  
      var div = document.getElementById("dv-kutu");
      var color = `rgb(${red}, ${yellow}, ${blue})`;
      var antiColor = `rgb(${255-red}, ${255-yellow}, ${255-blue})`;
      div.style.backgroundColor = color;
      div.innerHTML = color;
      div.style.color = antiColor;
      div.style.fontWeight = 500;
  }
  
  //renklendir();