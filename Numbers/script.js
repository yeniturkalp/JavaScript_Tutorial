// Numbers

let val;

// val = Number('10'); // string ifadeyi num yapar
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('a10a');
// val = isNaN('10');
// val = isNaN('a10');

// var num = 10.12456789;
// val = num.toPrecision(6);
// val = num.toFixed(2);

val = Math.PI; // pi değeri üretir
val = Math.round(2.4);
val = Math.round(2.7);
val = Math.ceil(2.4); // yukarıya yuvarlar
val = Math.ceil(2.6);
val = Math.floor(2.4); // aşağıya yuvarlar
val = Math.floor(2.7);
val = Math.sqrt(64);
val = Math.pow(2,4);
val = Math.abs(-100);
val = Math.min(1,2,3,2,4,9); // en düşük sayıyı seçer
val = Math.max(4,5,6,4,98,7); // en yüksek sayıyı seçer
val = Math.floor(Math.random()*100+1); // 100 e kadar random sayı üretir

console.log(val);
console.log(typeof val);