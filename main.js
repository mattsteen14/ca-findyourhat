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
            return;
        }
        const nextPosition = this.field[x][y];
        if (nextPosition === hole) {
            console.log('You fell into a hole!');
            return;
        } else if (nextPosition === hat) {
            console.log('You found your hat!');
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

while (true) {
    const direction = prompt('Which way? (u = up, d= down, l = left, r = right): ');
    myField.movePlayer(direction);
    myField.print();
}