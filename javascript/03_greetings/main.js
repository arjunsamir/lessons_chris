function printToScreen(text) {
    document.querySelector('#text-container').textContent = text;
}


function getGreeting(hour) {

    const h = hour || new Date().getHours();

    if (h < 4) return ['Hello', '👋🏽'];
    else if (h < 12) return ['Good Morning', '🌞'];
    else if (h < 16) return ['Good Afternoon', '🌥'];
    else if (h < 20) return ['Good Evening', '🕯'];
    else return ['Good Night', '🌕'];

}

// 1. Get The Users Name
// const userName = prompt('What is your name?');
const userName = 'Arjun';

// 2. Get The Current Time
//const greeting = getGreeting(new Date().getHours());
const [greeting, emoji] = getGreeting();



printToScreen(greeting + ' ' + userName + ' ' + emoji);