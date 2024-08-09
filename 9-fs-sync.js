// inbuilt modules

// os
// path
// fs
// http


const { readFileSync, writeFileSync } = require('fs')

console.log("starting  task")

const first = readFileSync('./content/first.txt', 'utf8')
console.log(first);

writeFileSync(
    './content/second.txt', 
    "Hello i was created newly today during node lesson",
    {flag: "a"}
)
console.log("done with task")
console.log("starting a new task")
