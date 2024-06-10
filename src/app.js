const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/main");
const Detail=require("./models/details");
const Slider=require("./models/Slider");
const Service=require("./models/Service");
const bodyParser=require('body-parser');
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(bodyParser.urlencoded({
  extended:true
}))
app.use('/static', express.static("public"));
app.use('', routes);


app.set('view engine', 'hbs');
app.set('views', 'views');

// Register all partials from the specified directory
hbs.registerPartials("views/partials");

// db connection
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/website_tut", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected to db");

    // Slider.create([
    //   {
    //     title:'Learn Java in easy manner',
    //     subTitle:'Java is one of the most popular language',
    //     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jK2ag_Icq2ap4EkD11In9kaI0mTdx0ES-g&s',
    //   },
      // {
      //   title:'What is Django in Python?',
      //   subTitle:'Django is a framework of Python',
      //   imageUrl:'/static/img/images (2)',
      // },
      // {
      //   title:'What is node JS?',
      //   subTitle:'Node Js is a webdevlopment languages',
      //   imageUrl:'/static/img/images (3)',
      // },
    // ])


    // Detail.create({
    //   brandName:"JS solution",
    //   brandUrl:"https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI",
    //   links:[
    //     {
    //       label:"Home",
    //       url:"/"
    //     },
        
    //     {
    //       label:"Service",
    //       url:"/services"
    //     },
    //     {
    //       label:"Gallery",
    //       url:"/gallery"
    //     },
    //     {
    //       label:"About",
    //       url:"/about"
    //     },
    //     {
    //       label:"Contact Us",
    //       url:"/contact-us"
    //     },
        
    //   ]
    // })

    // Service.create([
    //   {
    //     icon:'fa-solid fa-code-branch',
    //     title:'Provide Best Courses',
    //     description:'We provide best course that help our student in learning and in placement.',
    //     linkText:'https://www.justdial.com/Navsari/Ajay-Jewellers-Gandevi/9999P2637-2637-110404215049-E6F5_BZDET',
    //     link:'Check',
    //   },
    //   {
    //     icon:'fa-solid fa-paperclip',
    //     title:'Provide Best Courses',
    //     description:'We provide best course that help our student in learning and in placement.',
    //     linkText:'https://www.justdial.com/Navsari/Ajay-Jewellers-Gandevi/9999P2637-2637-110404215049-E6F5_BZDET',
    //     link:'Check',
    //   },
    //   {
    //     icon:'fa-solid fa-ghost',
    //     title:'Provide Best Courses',
    //     description:'We provide best course that help our student in learning and in placement.',
    //     linkText:'https://www.justdial.com/Navsari/Ajay-Jewellers-Gandevi/9999P2637-2637-110404215049-E6F5_BZDET',
    //     link:'Learn',
    //   },
      // {
      //   icon:'fa-brands fa-slack',
      //   title:'Provide Best Courses',
      //   description:'We provide best course that help our student in learning and in placement.',
      //   linkText:'https://www.justdial.com/Navsari/Ajay-Jewellers-Gandevi/9999P2637-2637-110404215049-E6F5_BZDET',
      //   link:'Learn',
      // },
      // {
      //   icon:'fa-solid fa-circle-info',
      //   title:'Provide Best Courses',
      //   description:'We provide best course that help our student in learning and in placement.',
      //   linkText:'https://www.justdial.com/Navsari/Ajay-Jewellers-Gandevi/9999P2637-2637-110404215049-E6F5_BZDET',
      //   link:'Check',
      // },
      // {
      //   icon:'fa-brands fa-stack-overflow',
      //   title:'Provide Best Courses',
      //   description:'We provide best course that help our student in learning and in placement.',
      //   linkText:'https://www.justdial.com/Navsari/Ajay-Jewellers-Gandevi/9999P2637-2637-110404215049-E6F5_BZDET',
      //   link:'Learn',
      // },
  // ])

  



  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

connectToDatabase();

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});


