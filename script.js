let length = 0;
let element = document.getElementById('song');
let element2 = document.getElementById('song_area');
let start = document.getElementById('start');
let restart = document.getElementById('restart');


// code for delay function obtained from:
// https://www.tutorialspoint.com/how-to-add-delay-in-a-loop-in-javascript#:~:text=Make%20a%20function%20called%20sleep,1%20second%2C%20between%20each%20iteration.
function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}


// async added to function to allow delay function to work
// see here for async & await https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function print_song(length){
    start.classList.add('hide');
    var wait = 250;
    for (let i=99;i>=length;i--){
        var paragraph = document.createElement('p');
        var node = document.createTextNode(
            i+' bottles of beer on the wall, '+i+' bottles of beer. You take one down, pass it around, '+i+' bottles of beer on the wall!'
        );
        paragraph.appendChild(node);
        element.appendChild(paragraph);
        await delay(wait);
    }

    restart.classList.remove('hide');
};