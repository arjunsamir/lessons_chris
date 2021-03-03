function sayHello(firstName, lastName, profession) {
    console.log('Hello my name is ' + firstName + ' ' + lastName + '. I am a ' + profession + '.');
}


function printToScreen(text) {
    document.querySelector('#text-container').textContent = text;
}


sayHello("Arjun", "Patel", "Software Engineer");
sayHello("Chris", "Ortega", "Business Owner");


const age = 20, legalAge = 21;

if (age >= legalAge) {
    printToScreen('Yeahhh boyyy go and get a drink');
}
else if (age == 20) {
    printToScreen("You're so close bud... Sorry no alcohol for you");
}
else {
    printToScreen('A very sad boi. No alcohol for you.');
}