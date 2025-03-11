let displayColors = function (message: string, ...colors: string[]) {
    console.log(message);
    console.log(colors);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let message = "Hello";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Green');
displayColors(message, 'Red', 'Green', 'Blue');