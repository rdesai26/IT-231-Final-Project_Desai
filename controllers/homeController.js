"use strict"

exports.showAbout = (req,res) => {
    res.render("about");
};
exports.showLocation = (req,res) => {
    res.render("location");
};
exports.showFurniture = (req,res) => {
    res.render("furniture");
};
/* exports.showContact = (req,res) => {
    res.render("contact", {
        offeredCourses: ourses
    });
}; uncomment if testing for 500 error on contact page */

exports.showContact = (req,res) => {
    res.render("contact")
};

exports.showIndex = (req,res) => {
    res.render("index");
};
exports.showSubscribers = (req,res) => {
    res.render("subscribers");
};