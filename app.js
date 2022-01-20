const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();


const db = require('./config/database')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

 
 db.sequelize.sync().then(() => {
});


app.set('view engine', 'ejs')
app.set('views', 'views')

// 
const PORT = 5001




require('./routes/web.js')(app)


app.listen(PORT, console.log(`app listen in ${PORT}`))

