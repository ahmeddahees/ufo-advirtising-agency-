//  to controll ur website


const express = require('express')
const app = express()
const port = 8080;
const helmet = require("helmet");
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
app.use(helmet())
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://YOU USER NAME:YOUR PASSWORD@cluster0.20l5d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then((resulet) => {
    app.listen(process.env.port || port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })

}).catch(err => {
    console.log(err);

});
app.get('/contact', (req, res) => {
    res.render("contact")
});
app.get('/index', (req, res) => {
    dahees.find()
        .then((result) => {
            res.render("index", { mythings: result });
        })
        .catch((err) => {
            console.log(err)

        });

});
app.get('/', (req, res) => {
    res.redirect("/index")
});

app.get('/input', (req, res) => {
    res.render("input")
});
const contacts = require("./models/ahmeddahees");

const dahees = require("./models/ahmeddahees");
const { findById } = require('./models/ahmeddahees');
const { title } = require('process');

app.post("/contact", (req, res) => {

    const good = new contacts(req.body);
    console.log(req.body)
    good.save()
        .then(result => {
            res.redirect("/contact");
        })
        .catch(err => {
            console.log(err);
        });
});

app.post("/index", (req, res) => {

    const post1 = new dahees(req.body);
    console.log(req.body)
    post1.save()
        .then(result => {
            res.redirect("/index");
        })
        .catch(err => {
            console.log(err);
        });
});



app.get("/index/:id", (req, res) => {
    dahees.findById(req.params.id).then((result) => {
            res.render("detials", { object: result });
        })
        .catch((err) => {
            consol.log(err);
        });
});
