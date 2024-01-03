const express=require('express')
const app=express()
const mongoose=require('mongoose')

const BlogRoutes=require('./router/BlogRoutes')

// milldware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(BlogRoutes)
const db_url =
'mongodb+srv://rakoto:rakoto@cluster0.fkhnszr.mongodb.net/myfirst'
    
// connect into the database 
mongoose
    .connect(db_url)
    .then((result) => {
        console.log('Connected to MongoDB');
        app.listen(3000);
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });
app.set('view engine', 'ejs');

// exmple of  create a json element and add into the database




app.get('/creation',(req,res)=>{
    let title='creation'
    res.render('creation',{title})
})
app.get('/about',(req,res)=>{
    let title='about'
    res.render('about',{title})
})
app.use( (req,res)=>{
    res.render('404')
})
