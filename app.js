const express =  require ('express');
const path = require('path')
const app = express();
const port = 3000
const router = require('./router/router')
const controller = require('./controller/controller')

// set view engine 
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true })); 
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(router)
app.use( controller.get404);

app.listen (port , ()=>{
    console.log(`App run on port ${port}`);
})