const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb://localhost/test')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Middlewares
app.use(bodyParser.json());
 
var whilteList = ['http://localhost:3000'];
var corsOptions = {
    origin: function (origin, callback) {
        if (whilteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

// Routes

app.use('/api', require('./routers/tasks_router.js'));



// listen 

app.listen(process.env.PORT || 4000, () => {console.log('Server started')});