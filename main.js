const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.playerPosition = { x: 0, y: 0 };
        this.field[0][0] = pathCharacter;
    }
    print() {
        this.field.forEach(row => console.log(row.join('')));
    }
    playerChoice() {
        const choice = prompt('Would you like to play again? y or n: ');
        if (choice.toLowerCase() === 'y') {
            this.resetField();
        } else {
            console.log('Thanks for playing!');
            process.exit();
        }
    }
    resetField() {
        this.field = [
            [pathCharacter, fieldCharacter, hole],
            [fieldCharacter, hole, fieldCharacter],
            [fieldCharacter, hat, fieldCharacter],
        ];
        this.playerPosition = { x: 0, y: 0 };
        console.clear();
        // this.print();
    }
    movePlayer(direction) {
        let { x, y } = this.playerPosition;
        switch (direction) {
            case 'u': // Move up
                x -= 1;
                break;
            case 'd': // Move down
                x += 1;
                break;
            case 'l': // Move left
                y -= 1;
                break;
            case 'r': // Move right
                y += 1;
                break;
            default:
                console.log('Invalid move');
                return;
        }
        if (x < 0 || y < 0 || x >= this.field.length || y >= this.field[0].length) {
            console.log('Out of Bounds!');
            this.playerChoice();
            return;
        }
        const nextPosition = this.field[x][y];
        if (nextPosition === hole) {
            console.log('You fell into a hole!');
            this.playerChoice();
            return;
        } else if (nextPosition === hat) {
            console.log('You found your hat!');
            this.playerChoice();
            return;
        }
        this.field[this.playerPosition.x][this.playerPosition.y] = fieldCharacter;
        this.playerPosition = {x, y};
        this.field[x][y] = pathCharacter;
    }
}

const myField = new Field([
    [pathCharacter, fieldCharacter, hole],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter],
]);

console.clear();
myField.print();

while (true) {
    const direction = prompt('Which way? (u = up, d= down, l = left, r = right): ');
    myField.movePlayer(direction);
    myField.print();
}