// Şart blokları

const firstName='Alp';
const age = 19;
const isStudent = false;
const school = 'university';

// if(firstName === 'Alp'){
//     console.log('Merhaba Alp');
// }

// if (age === 19){
//     console.log('yaşınız 19');
// }

// if (isStudent){
//     console.log('Merhaba öğrenci');
// }else{
//     console.log('Hey dostum senin ne işin var burda');
// }


// if (age>=18){
        // if yapısı içinde if yapısı
//     if ((school == 'university') || (school == 'high school')){
//         console.log('ehliyet alabilirsiniz');
//     } else{
//         console.log('eğitim durumunuz yetersiz');
//     } // üni veya lise mezunu ise ehliyet alablir eğer değilse alamaz

// }else{
//     console.log('ehliyet alamazsınız');
// } // yaşı 18 den büyük ise ehliyet alabilir eğer küçük ise ehliyet alamaz


// if (age > 0  && age<12 ){
//     console.log(`${firstName} is a child`);
// }else if (age >=13 && age <=19){
//     console.log(`${firstName} is a teenager`);
// }else{
//     console.log(`${firstName} is an adult`);
// }

// yaşı 12 den küçük ise ; çocuk, 19 a eşit veya küçük ise genç, 19 dan büyük ise olgun

//undefined

if (typeof id !== 'undefined'){
    console.log('id: '+id);
}else{
    console.log('no id');
}

// SWITCH YAPISI

// İç içe sorguların olduğu daha düzenlü olması için switch yapısı kullanılır

const age = 21;
const firstName ='alp';

switch(true){
    case age>=0 && age<=12:
       console.log(`${firstName} is a child`);
    break;
    case (age >=13 && age <=24):
       console.log(`${firstName} is a teenager`);
    break;
    default:
       console.log(`${firstName} is an adult`); 
    }

// `${firstName}` kodu ile daha pratik sorgu yazılabiliyor. Flutterdaki interpolation ifadesi gibi

