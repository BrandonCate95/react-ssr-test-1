import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from '../App'
//import '../App.css'

const app = express();

app.use( express.static( path.resolve( __dirname, "../../build" ) ) );

app.get( "/*", ( req, res ) => {
    const context = { };
    console.log(App)
    const jsx = (
        <StaticRouter context={ context } location={ req.url }>
            <App />
        </StaticRouter>
    );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
})

app.listen( 5000 );

function htmlTemplate( reactDom ) {
    return `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
            <link rel="manifest" href="/manifest.json">
            <link rel="shortcut icon" href="/favicon.ico">
            <title>React App</title>
            <link href="/static/css/main.c17080f1.css" rel="stylesheet">
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">${reactDom}</div>
            <script type="text/javascript" src="/static/js/main.b70b84e5.js"></script>
        </body>
    </html>
    `;
}

console.log('listening on port 5000')