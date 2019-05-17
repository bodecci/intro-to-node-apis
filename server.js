//require is just like script src
//express is a JS library that allows us to respond to requests
const express = require('express');
const app = express();

//helps narrow downwhere the rewuest can be made
const PORT = 5000; //between 3000 and 65000

//public is the location of our client code
//express responds to requests
//by default, index.html is returned
app.use(express.static('public'));

//startup our server, it will be listening
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});