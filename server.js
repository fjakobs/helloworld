require("http").createServer(function(req, res) {
    res.writeHead(200);
    res.end("Welcome to Amsterdam");
}).listen(process.env.PORT);