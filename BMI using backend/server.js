let express = require('express');
const app = express();
let bodyParser = require('body-parser');;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
    let weight = Number(req.body.weight);
    console.log(req.body.weight);
    let height = Number(req.body.height);
    let BMI = Number(weight / height);
    res.send("BMI is " + BMI);
})
app.listen(3002, () => {
    console.log("listening at 3002");
});