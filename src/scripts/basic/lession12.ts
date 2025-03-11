let displayColorsSpead = function (message: string, ...colors: string[]) {
    console.log(message);
    console.log(colors);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let messagesSpead = "Hello";
let colors = ['Red','Green','Blue'];
displayColorsSpead(messagesSpead,...colors);