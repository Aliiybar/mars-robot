export default function Move(plateau, commands){
    const dimensions = plateau.split("x");
    const xMax = Number(dimensions[0]);
    const yMax = Number(dimensions[1]);
    let currentX = 1;
    let currentY = 1;
    let currentDirection = "North"

    const commandArray = commands.split('');

    commandArray.map(cmd => {
        console.log("cmd : ", cmd)
        switch (cmd){
            case "F":
                if(currentDirection === "North" && currentX < xMax)
                    currentX += 1;
                if(currentDirection === "South" && currentX > 1)
                    currentX -= 1;
                if(currentDirection === "West" && currentY > 1)
                    currentY -= 1;
                if(currentDirection === "East" && currentY < yMax)
                    currentY += 1;
                return;
            case "L":
                switch(currentDirection){
                    case "North":
                        currentDirection = "West";
                        return;
                    case "South":
                        currentDirection = "East";
                        return;
                    case "West":
                        currentDirection = "South";
                        return;
                    case "East":
                        currentDirection = "North";
                        return;
                }
                return;
            case "R":
                switch(currentDirection){
                    case "North":
                        currentDirection = "East";
                        return;
                    case "South":
                        currentDirection = "West";
                        return;
                    case "West":
                        currentDirection = "North";
                        return;
                    case "East":
                        currentDirection = "South";
                        return;
                }
        }
    })

    return currentX.toString() + "," + currentY.toString() + "," + currentDirection;
}