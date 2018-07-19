const express = require('express');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 4202;

const app = express();

// app.get( '/app1/*' , (req,res) => {
//     res.sendFile( path.join( __dirname , '/public/app1/index.html' ) )
// } )

// app.use( express.static('public') );

// app.listen( PORT , () => {
//     console.log( 'Server running at port - ' + PORT );
// } );


app.use(express.static(path.join( __dirname , '/public'  )));

app.get( '/fruits/*' , (req,res) => {
    res.sendfile( path.join( __dirname + "/public/fruits/index.html" ) )
} );

app.get( '/vegetables/*' , (req,res) => {
    res.sendfile( path.join( __dirname + "/public/vegetables/index.html" ) )
} );

app.get( '/dairy/*' , (req,res) => {
    res.sendfile( path.join( __dirname + "/public/dairy/index.html" ) )
} );

app.set( 'port' , PORT );

const server = http.createServer(app);
server.listen( PORT , () => {
    console.log(`Server running at ${PORT}`);
} )