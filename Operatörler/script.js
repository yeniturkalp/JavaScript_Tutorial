// Operatörler

let val;
const a=10; // bir değerin değişmesini istemiyorsak const değişkenini atayabiliriz
const b=5;
const c=5;
let   d=3;

// 1- Aritmetik Operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;
val = ++d;
val = --d;
val = d--;

// 2- Atama Operatörleri

val = a;
val +=a; // val = val + a;
val -=a; // val = val - a;
val *=a; // val = val * a;
val /=a; // val = val / a;
val %=a; // val = val % a;


// 3- Karşılaştırma Operatörleri

val = a==b; // a b ye eşit mi sorusunu sorar
val = b==c;
val = b===c; // değer kontrolü & type yani hep değer kontrolu yapar b c ye eşit mi sorusunu sorar ve tip kontrolü yapar
val = 5 === '5';
val = a!=b;
val = a!==b;
val = a > b;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b;

// 4- Mantıksal Operatörler

   // && (And / ve)
   // true  && true  => true
   // true  && false => false
   // false && false => false
   // ve operatöründe her iki sorguda true olmak zorunda

     // || (Or / veya)

   // veya operatöründe her iki sorguda true olmak zorunda değil bir sorgunun true olması yeterli
 
   // true  && true  => true
   // true  && false => true
   // false && false => false

   val=  (a>b) && (a>c) // (a büyüktür b de ) ve a büyüktür c den)
   val = (a>b) || (a<c) 
   val = !(a>b)

   // ! (Not)

   // değerin zıttını yazdırır

   // !true  => false
   // !false => true

console.log(val);
console.log(typeof val);