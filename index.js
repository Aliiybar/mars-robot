import { platform } from 'os';
import readline from 'readline';
import Move from './src/move.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Plateau dimensions (ie 5x6)? ', function (plateau) {
    rl.question('Commands string ? ', function (commands) {
        console.log("Result : ", Move(plateau, commands));
        rl.close();
    });
});

