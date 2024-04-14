let length = 0;
let element = document.getElementById('song');

function print_song(length){
    for (let i=99;i>=length;i--){
        var paragraph = document.createElement('p');
        var node = document.createTextNode(
            i+' bottles of beer on the wall, '+i+' bottles of beer. You take one down, pass it around, '+i+' bottles of beer on the wall!'
        );
        paragraph.appendChild(node);
        element.appendChild(paragraph);
    }
};