const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs'); //this line of code tells our app which is generated using Express to use EJS as its view engine.

app.get("/", function (req, res) {

    var today = new Date();
    var day = "";
    var verb = "";


    switch (today.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Invalid day of the week";
            console.log("Code Broke")
            break;
    }

    res.render("list", { kindOfDay: day });
});






app.listen(3000, function () {
    console.log("Server is running on port 3000")
})