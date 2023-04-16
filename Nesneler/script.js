let val;

let person = {
    firstName : 'Alp',
    lastName : 'Yenitürk',
    age : 21,
    hobbies : ['music','game'],
    address : {
        city : 'Bursa',
        country : 'Türkiye'
    },
    getBirthYear : function(){
        return 2021- this.age; 
    } // this bu nesne içindeki tarihi baz alarak işlem yapmayı sağlar 
};

// nesne içinde istedğimiz bilgileri aşağıdaki kodlar ile elde edebiliriz  

val = person;
val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.address['city'];
val = person.getBirthYear();




let people = [
                {firstName : 'alp',lastName:'yenitürk'},
                {firstName : 'erkan',lastName:'yenitürk'},
                {firstName : 'okan',lastName:'yenitürk'}
             ];


val = people[2];
val = people[2].firstName; // okanı getirir

for(let i =0; i<people.length;i++){
    console.log(people[i].firstName);
} // isimleri yazdırır

// console.log(val);
// console.log(typeof people);