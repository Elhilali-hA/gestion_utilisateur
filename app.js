const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();


const db = require('./config/database')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

 
 db.sequelize.sync({force: true}).then(() => {
 console.log('Drop and Resync with { force: true }');
});


app.set('view engine', 'ejs')
// 
const PORT = process.env.PORT || 5000




require('./routes/web.js')(app)


app.listen(PORT, console.log(`app listen in ${PORT}`))

app.get('/', (req, res) => res.send('HELLo'))