export default function Move(plateau, commands){
    const dimensions = plateau.split("x");
    const xMax = dimensions[0];
    const yMax = dimensions[1];
    let currentX = 1;
    let currentY = 1;
    let currentDirection = "North"

    const commandArray = commands.split('');

    commandArray.map(cmd => {
        switch (cmd){
            case "F":
                currentX += 1;
        }
    })

    return currentX.toString() + "," + currentY.toString() + "," + currentDirection;
}