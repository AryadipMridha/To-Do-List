const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs'); //this line of code tells our app which is generated using Express to use EJS as its view engine.

app.get("/", function (req, res) {

    var today = new Date();
    var day = "";
    var verb = "";


    if (today.getDay() === 0 || today.getDay() === 6) {
        day = "weekend";
        verb = "are";
    } else {
        day = "weekday";
        verb = "aren't";
    }



    res.render("list", { kindOfDay: day, verbs: verb });
});






app.listen(3000, function () {
    console.log("Server is running on port 3000")
})