
const express = require('express');
const { route } = require('express/lib/application');
const Detail = require("../models/details");
const Slider = require("../models/Slider");
const Service = require('../models/Service');
const Contact = require('../models/contact'); // Assuming your model is named Contact


const routes = express.Router();
exports.routes = routes;



// Home page route
routes.get("/", async (req, res) => {
   
        const details = await Detail.findOne({ _id: "6659e079b3a4f3e50053492c" });
        const slides = await Slider.find();
        const services = await Service.find();

        // console.log(slides);
        // console.log(details);


        res.render("index", {
            details: details,
            slides: slides,
            services: services,
        })

});


//Gallery Route
routes.get("/gallery", async (req, res) => {
   
    const details = await Detail.findOne({ _id: "6659e079b3a4f3e50053492c" });
    const slides = await Slider.find();

    res.render("gallery", {
        details: details,
        slides: slides,
    })

});


// Contact form processing route
routes.post("/process-contact-form", async (req, res) => {
    console.log("Form is submitted...");
    console.log(req.body);
    // Save the data to the database
    try {
        const data = await Contact.create(req.body);
        console.log(data);
        res.redirect("/");
    } catch (e) {
        console.log(e);
        res.redirect("/");
    }
});

module.exports = routes;