var http = require("http");
var url = require("url");

function start(route, handle) {
    var onRequest = function (request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " received");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+
                        postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    };

    http.createServer(onRequest).listen(8889);
    console.log("server started");
}

exports.start = start;

