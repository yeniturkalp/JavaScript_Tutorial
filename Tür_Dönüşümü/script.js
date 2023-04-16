// Tür Dönüşümü

let val; // val değeri tanımlandı 

// number to string
val = String(10) // number değer string ifade ile çevrelendiği için string değere dönüştürüldü (typeof val) kodu yazılarak string bir türe çevrildiğini görebiliriz

// bool to string
val = String(true) // bool değer string ifade ile çevrelendiği için string değere dönüştürüldü (typeof val) kodu yazılarak string bir türe çevrildiğini görebiliriz

// date to string
val = String(new Date())

// array to string
val = String([1,2,3,4])

console.log(val)
console.log(typeof val)
console.log(val.length) // değer içindeki eleman sayısını gösterir

// toString()

val = (10).toString() // değer sonuna tostring kodu eklenerek ifadeyi string ifadeye dönüştürebiliriz
val = (false).toString()

// string to number
val = Number(true)
val = Number(false)
val = Number(null)
val = Number('A')
val = Number([1,2,3,4])

// parseInt()
// parseFloat()

val = parseInt('10')
val = parseInt('10.5') // consolda 10 değeri döner çünkü tam sayı döndürür geriye
val = parseFloat('10.5') // 10.5 geriye döner çünkü ondalık basamağınıda gösterir 