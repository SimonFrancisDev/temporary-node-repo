const os = require('os');

console.log(os.type());
console.log(os.version());
console.log(os.machine());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime()); 

userMobileInfo = {
    osname: os.type(),
    osVersion: os.version(),
    osFreemem: os.freemem(),
    osTotalmem: os.totalmem()
}

console.log(userMobileInfo);
