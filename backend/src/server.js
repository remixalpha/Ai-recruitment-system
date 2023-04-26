const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Quiz application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post('/insert', async (req, res) => {
  const title = req.body.title
  const question = req.body.question
  const option_1 = req.body.option_1
  const option_2 = req.body.option_2
  const option_3 = req.body.option_3
  const option_4 = req.body.option_4
  const answer = req.body.correct_answer
  const formData = new Quiz({
    title: title,
    question: question,
    option_1: option_1,
    option_2: option_2,
    option_3: option_3,
    option_4: option_4,
    answer: answer
  })

  try {
    await formData.save();
    res.send("inserted data..")
  } catch (err) {
    console.log(err)
  }
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });