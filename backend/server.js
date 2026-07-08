// import http from "node:http";
// import express from 'express';
// import dotenv from 'dotenv';
//
// dotenv.config();
// const PORT = process.env.PORT || 3000;

// task
// for localhost:3000 return plain text
// for localhost:3000/json return json
// for localhost:3000/html return html

// const serverTask = http.createServer((req,res)=>{
//     console.log(req.url);
//     console.log(`Recieved request: ${req}`);
//     if(req.url === "/json"){
//         const data={
//             message: "Hello World!",
//             timestamp: new Date().toISOString(),
//         };
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify(data));
//     }
//     else if(req.url === "/html"){
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.end("<html><body><h1>Hello World!</h1></body></html>");
//     }else{
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.end("Hello World!");
//     }
// });

// serverTask.listen(PORT, ()=> {
//     console.log(`serverTask started on http://localhost:${PORT}`);
// });

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("Hello World!\nHi Sonal Queen");
// });
//
// //for json version
// const data={
//     message:"Hello World!",
//     timestamp:Date.now()
// }
// const serverJson = http.createServer((req,res)=>{
//     res.writeHead(200, {"Content-Type": "application/json"});
//     res.end(JSON.stringify(data));
// })
// server.listen(3000, ()=>{
//     console.log("Server is running on http://localhost:3000");
// });

// serverJson.listen(3000, ()=>{
//     console.log("Server is running at http://localhost:3000");
// })

// ---------ExpressJs----------------------
import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const  PORT = process.env.PORT || 5000;
const app = express();

const Middleware = (req,res,next)=>{
    console.log(`Recieved request for ${req.url}`);
    next(); //call the next middleware or route handler
};

const logger = (req) => { //convert this into middleware
    console.log(`Recieved request for ${req.url}`);
};

app.use(Middleware);

app.get("/", (req, res) => {
    // logger(req);
    res.send("Welcome");
});

app.get("/json", (req, res) => {
    // logger(req);
    const data = {
        message: "Hello World!",
        timestamp: Date.now(),
        area: 'Backend',
    };
    res.json(data);
});

app.get('/html', (req, res) => {
    // logger(req);
    res.send(`<html><body><h1>Hello World!</h1></body></html>`);
});

app.get('/health', (req, res) => {
    logger(req);
   res.status(200).send('OK');
});

app.use((req,res) => {
    res.status(404).send('Not Found');
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})