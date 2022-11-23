import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Plateau dimensions (ie 5x6)? ', function (dimensions) {
    rl.question('Commands string ? ', function (commands) {
        console.log(`Plateau dimensions : ${dimensions}, commands entered : ${commands}`);
        rl.close();
    });
});

