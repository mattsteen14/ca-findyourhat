const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.playerPosition = {x: 0, y:0};
        this.field[0][0] = pathCharacter;
    }
    print() {
        this.field.forEach(row => console.log(row.join('')));
    }
}

const myField = new Field([
    [pathCharacter, fieldCharacter, hole],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter],
]);

myField.print();