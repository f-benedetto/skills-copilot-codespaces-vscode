//Create web server
var express = require('express');
var app = express();
var fs = require('fs');

//Set up the server
app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000/');
});

//Set up the route
app.get('/', function(req, res) {
    res.send('Hello, world!');
});

//Set up the route
app.get('/comments', function(req, res) {
    //Read the file
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        //Send the data to the client
        res.json(JSON.parse(data));
    });
});

//Set up the route
app.post('/comments', function(req, res) {
    //Read the file
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        //Parse the data
        var comments = JSON.parse(data);

        //Add the new comment
        comments.push(req.body);

        //Write the data back to the file
        fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }

            //Send the response
            res.json(comments);
        });
    });
});

//Set up the route
app.delete('/comments', function(req, res) {
    //Read the file
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        //Parse the data
        var comments = JSON.parse(data);

        //Remove the comment
        comments.splice(req.body.index, 1);

        //Write the data back to the file
        fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }

            //Send the response
            res.json(comments);
        });
    });
});

//Set up the route
app.put('/comments', function(req, res) {
    //Read the file
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.error(err);
                        process.exit(1);
                    }
            
                    //Parse the data
                    var comments = JSON.parse(data);
            
                    //Update the comment
                    comments[req.body.index] = req.body.comment;
            
                    //Write the data back to the file
                    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
                        if (err) {
                            console.error(err);
                            process.exit(1);
                        }
            
                        //Send the response
                        res.json(comments);
                    });
                });
            });