require("dotenv").config();

let bodyParser = require("body-parser");
let express = require('express');
let app = express();


//const absPath = __dirname + "/views/index.html";
//console.log("Hello World");
// app.get("/", (req, res) => {
//     res.sendFile(absPath);
// });

// app.use("/public", express.static(__dirname + "/public"));
// app.get("/json", (req, res) => {
//         res.json({message: "Hello json"});    
// });

// app.get("/json", (req, res) => {
//     const style = process.env.MESSAGE_STYLE;
//     if(style === "uppercase"){
//         res.json({"message": "HELLO JSON"});    
//     }else{
//         res.json({"message": "Hello json"});
//     }
// });

// app.use("/", (req, res, next) => {
//     console.log(req.method + " " + req.path + " - " + req.ip);
//     next();
// })

// app.get("/now", (req, res, next) => {
//     req.time = new Date().toString();
//     next();
// }, function(req, res){
//     res.json(({time: req.time}));
// });

// app.get("/:word/echo", (req, res) => {
//     res.json({echo: req.params.word});
// });

// app.get("/name", (req, res) => {

//     var first = req.query.first;
//     var last = req.query.last;
//     res.json("{name: `${first} ${last}`}");
// });

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.post("/name", (req, res) => {

//     var string = req.body.first + " " + req.body.last;

//     res.json({name: string});
// });

























 module.exports = app;
