// Arrays

let names = ['çınar','sena','ada','yiğit'];
let years = [2017,1970,1990,1998];
let mix = ['sadık','turan',1983,null,undefined,['sinema','kitap']];

// // get array item
// console.log(names[0]) // isim dizisinden 0. indexte olan veriyi getirir yani çınarı
// console.log(names[3])

// // set array item
// names[names.length]='emel'; // emele index 4 e ekler yani en sona

// // add item
// years.push(1986);
// years.unshift(1986);

// // remove item
// years.pop();
// years.shift();

// //indexof
// let index = names.indexOf('ada'); // index noyu bulur ilk bulduğu yerdeki indexi verir
// console.log(' index : '+index);

// // reverse
// names.reverse(); diziyi tersten yazar

// // sort
// years.sort();

// //concat
// let val = years.concat(names); // yıl ve isim dizilerini birleştirir
// console.log(val);

// splice
// console.log(names);
// names.splice(0,1); // isim dizisinde 0 ve 1. index arasına veri ekler ya da siler

function over18(year){
    let age = 2018 - year;
    return age>=18; // dizide kimin yaşı 18 den büyük çıkarsa o yazdırılır
}

// find
// let val = years.find(over18);

// filter
let val = years.filter(over18);

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);