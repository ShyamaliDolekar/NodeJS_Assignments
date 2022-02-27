function getNameFromCommandLine() {
    const name = process.argv
    return name[name.length-1]
}

function getNameFromEnv() {
    return process.env.name
}

function getNameFromReadLine() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return rl.question((name)=>{
        console.log(name)
        rl.close();
    })
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}