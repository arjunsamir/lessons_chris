function sayHello(firstName, lastName, profession) {
    console.log('Hello my name is ' + firstName + ' ' + lastName + '. I am a ' + profession + '.');
}

sayHello("Arjun", "Patel", "Software Engineer");
sayHello("Chris", "Ortega", "Business Owner");


const age = 20, legalAge = 21;

if (age >= legalAge) {
    console.log('Yeahhh boyyy go and get a drink');
}
else if (age == 20) {
    console.log("You're so close bud... Sorry no alcohol for you");
}
else {
    console.log('A very sad boi. No alcohol for you.');
}