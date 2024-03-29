function route(handle, pathname, request, response) {
    console.log("about to route to " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](request, response);
    }
    else {
        console.log("and that would be a 404");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;

