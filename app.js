const express = require("express");
const app = express();
const m = require("./public/Modules");
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.get("/", (req, resp) => {
    resp.sendFile("./public/file.html", { root: __dirname });
})
app.get("/ArithmeticOperations", (req, resp) => {
    switch (req.query.Arithmetic) {
        case "+":
            var ans=m.Add(req.query.num1,req.query.num2);
            resp.send("<h1> Answer = "+ans+"</h1>");
            break;
        case "-":
            var ans=m.Sub(req.query.num1,req.query.num2);
            resp.send("<h1> Answer = "+ans+"</h1>");
            break;
        case "*":
            var ans=m.Mul(req.query.num1,req.query.num2);
            resp.send("<h1> Answer = "+ans+"</h1>");
            break;
        case "/":
            var ans=m.Div(req.query.num1,req.query.num2);
            resp.send("<h1> Answer = "+ans+"</h1>");
            break;
        case "%":
            var ans=m.Mod(req.query.num1);
            resp.send("<h1> Answer = "+ans+"</h1>");
            break;
    }
})
app.listen(3000);
console.log("running on port number : 3000");