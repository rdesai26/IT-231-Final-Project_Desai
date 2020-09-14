"use strict"

const express = require("express"),
app = express(),
errorController = require("./controllers/errorController"),
homeController = require("./controllers/homeController"),
subscriberController = require("./controllers/subscriberController"),
layouts = require("express-ejs-layouts"),
mongoose = require("mongoose"),
Subscriber = require("./models/subscriber");

mongoose.connect("mongodb+srv://it231:it231@cluster0-3rw6l.gcp.mongodb.net/furniture_db?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.get("/subscribers", subscriberController.getAllSubscribers, (req,res,next) => {
    res.render("subscribers", { subscribers: req.data });
});

app.get("/about", homeController.showAbout);
app.get("/contact", homeController.showContact);
app.get("/furniture", homeController.showFurniture);
app.get("/",homeController.showIndex);
app.get("/location",homeController.showLocation);

app.post("/subscribe", subscriberController.saveSubscriber);

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
