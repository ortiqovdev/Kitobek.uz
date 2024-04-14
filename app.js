require('dotenv').config();

const express = require('express');
const methodOverride = require("method-override");
const connectDB = require('./src/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser')
const router = require('./src/routes/routes')
const hbs = require('express-handlebars');


const app = express()

app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: true,
   store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
   }),
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
connectDB();

app.use(cookieParser());
app.use("/", express.static("public"))

app.set('view engine', '.hbs');
app.set("views", "./views");
app.engine('hbs', hbs.engine({ extname: 'hbs'}))


app.use('/', require('./src/routes/auth'));
app.use('/', require('./src/routes/routes'));
app.use('/', require('./src/routes/dashboard'));

// 404 not found
app.use((req, res, next) => {
   const locals = {
      title:"Page Not Found"
   }
   res.status(404).render("error/errorMassage", locals)
})

const PORT = process.env.PORT || 5100
app.listen(PORT, () => {
   console.log(`Server is running on port: http://localhost:${PORT}`)
})
