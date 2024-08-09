const http = require('http');

// creating a server;
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Welcome to this endpoint")
    }
    if(req.url === '/about') {
        res.end("Here is our short history")
    }
    res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page 
            that you are looking for
            </p>   
            <a href='/'>back to home page</a>
        `)
});


const port = 5000
server.listen(port, () => {
    console.log("Server listen at port" + " " + port + ".....")
});