var server = require("./server");
var router = require("./router");
var handlers = require("./handlers");

var handle = {};
handle["/"] = handlers.start;
handle["/start"] = handlers.start;
handle["/upload"] = handlers.upload;
handle["/show"] = handlers.show;

server.start(router.route, handle);

