let commands = [
    'ls',
    'cp',
    'mv',
    'mv',
    'mv',
    'cp',
    '!1',
    '!3',
    '!7'
]

/**
 * output = [3,2,4]
 */

function solution(commands) {
    let noOfCommands = []

    let cmdObj = {}

    let checkCommand = (item) => {
        if (item[0] !== '!') {
            cmdObj[item] = cmdObj[item] ? cmdObj[item] + 1 : 1
        } else {
            let newElement = commands[item.split('!')[1]-1];
            checkCommand(newElement)
        }
    }

    for (let i = 0; i < commands.length; i++) {
        const element = commands[i];
        checkCommand(element)
    }

    console.log(cmdObj)
    Object.entries(cmdObj).forEach(([key, value]) => {
        noOfCommands.push(value)
    });

    console.log(noOfCommands)
}

solution(commands)