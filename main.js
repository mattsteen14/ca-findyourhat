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
            console.log(`Now it's time to customise your field of play...`)
            const height = parseInt(prompt('Enter field grid height: '), 10);
            const width = parseInt(prompt ('Enter field grid width: '), 10);
            const percentage = parseInt(prompt('Enter percentage of holes on field: '));
            this.resetField(height, width, percentage);
        } else {
            console.log('Thanks for playing!');
            process.exit();
        }
    }
    resetField(height, width, percentage) {
        this.field = Field.generateField(height, width, percentage);
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

//Static method for generating a field
Field.generateField = function(height, width, percentage) {
    if (!Number.isInteger(height) || height <= 0) {
        throw new Error('Height must be a positive integer');
    }
    if (!Number.isInteger(width) || width <= 0) {
        throw new Error('Width must be a positive integer');
    }
    if (!Number.isInteger(percentage) || percentage <= 0) {
        throw new Error('Percentage must be a positive integer');
    }
    const totalCells = height * width;
    const holeCount = Math.floor((percentage / 100) * totalCells);
    // const tiles = [hat, hole, fieldCharacter, pathCharacter];
    // const random = Math.floor(Math.random() * tiles.length);
    const fieldGrid = [];
    //Initialise a field with all field characters
    for (let i = 0; i < height; i++) {
        const row = Array(width).fill(fieldCharacter);
        fieldGrid.push(row);
    }
    // Place hat, ensuring it's not at (0, 0)
    let hatX, hatY
    do {
        hatX = Math.floor(Math.random() * width);
        hatY = Math.floor(Math.random() * height);
    } while (hatX === 0 && hatY === 0);
    fieldGrid[hatY][hatX] = hat;
    // Place holes
    for (let i = 0; i < holeCount; i++) {
        let x, y;
        do {
            x = Math.floor(Math.random() * width);
            y = Math.floor(Math.random() * height);
        } while ((x === 0 && y === 0) || fieldGrid[y][x] !== fieldCharacter); //Make sure we're putting the hole in an empty spot
        fieldGrid[y][x] =  hole;
    }
    return fieldGrid;
};

const myField = new Field(Field.generateField(5, 5, 20));

console.clear();
myField.print();

while (true) {
    const direction = prompt('Which way? (u = up, d= down, l = left, r = right): ');
    myField.movePlayer(direction);
    myField.print();
}