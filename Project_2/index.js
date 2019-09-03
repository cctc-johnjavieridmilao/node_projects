const http = require('http');
const fs = require('fs');
const path = require('path');

// create server
const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, './public', 'index.html'), (err, content) => {
    //         res.writeHead(200, {
    //             'Content-type': 'text/html'
    //         });
    //         if (err) throw err;
    //         res.end(content);
    //     })
    // }

    // build file path
    let filepath = path.join(__dirname, './public', req.url === '/' ? 'index.html' : req.url);

    //Extension of file
    let extname = path.extname(filepath);

    //set contentType
    let contentType = 'text/html';

    //switch extname

    switch (extname) {
        case '.js':
            contentType = 'text/javaScript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    //read file

    fs.readFile(filepath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname, './public', '404.html'), (err, content) => {
                    res.writeHead(200, {
                        'Content-type': contentType
                    });
                    res.end(content, 'utf8');
                })
            } else {
                //server error
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`);
            }
        } else {
            //success
            res.writeHead(200, {
                'Content-type': contentType
            });
            res.end(content, 'utf8');
        }
    })

})

//set post
const PORT = process.env.PORT || 5000;

//run server
server.listen(PORT, () => {
    console.log(`Server running Post of: ${PORT}`)
})