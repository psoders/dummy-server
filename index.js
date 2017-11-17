const http = require('http');
const process = require('process');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

if (process.argv.length < 3) {
    console.log('Add text to serve as first argument');
    process.exit(1);
}

// easier to kill locally
process.on('SIGINT', function() {
    process.exit();
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // display whatever was passed as argument
    const content = process.argv.slice(2).join(" ");
    res.end(content+"\n");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});