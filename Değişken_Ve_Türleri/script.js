//DEĞİŞKENLER

var age;
console.log(age) // undefined: yaş değeri tanımlanmadığı için yani bir değere sahip olmadığı için tanımsız kabul edilir

age = 20;
console.log(age) // 20 // int değer

var fullname = 'Alpaslan Yenitürk';
console.log(fullname) // fullname e isim ataması yapıldığı için içeride o değeri çağırınca fullname e atılan değer döndürülüyor

/*
 Değişken Tanımlama Kuralları
 ** Değişken isimleri rakam ile başlayamaz.
    var 1yas; => hatalı
    var yas1; => geçerli
    var _yas; => geçerli
    
 ** Komut isimleriyle tanımlama yapılamaz. Örneğin if kelimesi dğeişken ismi olamaz.

 ** Büyük küçük harf duyarlılığı vardır.
    var firstName = 'Alpaslan';
    var FirstName = 'Yenitürk';

    Farklı değişken isimleridir.
 ** Değişken isimlerinde türkçe karakter kullanmamalıyız.   
*/

// DEĞİŞKEN TÜRLERİ

// String

// typeof döndürülen değerin değişken türünü geri döndürür

let firstName = 'alp';
console.log(typeof firstName) // string

// Number
let age = 20; 
console.log(typeof age)  // number

let money = 100.5;
console.log(typeof money)  // number

// Boolean
let isActive = false;
console.log(isActive) // boolean

// null
let job = null
console.log(job) // object

// undefined
let car;
console.log(typeof car) // undefined



// Reference Types: Objects

// Array

let names = ['Ali','Ahmet','Can']
console.log(names) // object

// Object Literals

let address= {
   city: 'Bursa',
   country: 'Türkiye'
}

console.log(address) // object

// Functions

var calculateAge = function(){
   return 0;
}

console.log(typeof calculateAge) // function

