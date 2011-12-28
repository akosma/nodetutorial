var http = require("http");
var url = require("url");

function start(route, handle) {
    var onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " received");
        route(handle, pathname, response);
    };

    http.createServer(onRequest).listen(8889);
    console.log("server started");
}

exports.start = start;

