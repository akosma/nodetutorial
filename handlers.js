var exec = require("child_process").exec;

function start(response) {
    console.log("request handler 'start' called");

    var params = { 
        timeout: 10000, 
        maxBuffer: 20000 * 1024 
    };
    var fun = function (error, stdout, stderr) {
        response.writeHead(200, { "Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    };
    exec("find /", params, fun);
}

function upload(response) {
    console.log("request handler 'upload' called");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello upload");
    response.end();
}

exports.start = start;
exports.upload = upload;

