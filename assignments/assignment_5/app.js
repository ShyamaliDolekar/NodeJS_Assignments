const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
SECRET = "RESTAPI"

const login = require("./routes/login")
const user = require("./routes/users")
const post = require("./routes/posts")

const app = express();

mongoose.connect("mongodb://localhost:27017/assignment_5")

app.use("/posts", (req, res, next) => {
    var token = req.headers.authorizaion.split("Bearer")[1];
    if(!token){
        return res.status(401).json({
            status: "failed",
            message: "token is missing"
        })
    }
    jwt.verify(token, SECRET, function(err, decoded){
        if(err){
            return res.status(401).json({
                status: "failed",
                message: "invalid token"
            })
        }
        else{
            req.user = decoded.data
            next();
        }
    })
})


app.use("/", login)
app.use("/users", user)
app.use("/", post)

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});