const express=require('express')
const router=express.Router()
const Blog=require('../model/model')


// post create
router.post('/postBlog',(req,res)=>{
    const blog=new Blog(req.body)
    blog.save()
    .then(result=>{
        res.redirect('/')
    })
})

// show details
router.get('/blogs/:id',(req,res)=>{
    let title='detail'
    const id=req.params.id
    Blog.findById(id)
    .then(result=>{
       res.render('detail',{title:title,blogs:result})
    })
})
// delete
router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id; 
    Blog.findByIdAndDelete(id)
        .then(result => res.json({ message: 'ok' }))
        .catch((error) => {
            console.error('Error deleting blog:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});



// routes
router.get('/',(req,res)=>{
    let title='acceuil'
    // get element in the database and display on the index
    Blog.find()
    .then(result=>{
        res.render('index'
        ,{
            blogs:result,
            title:title
        })
    }) 
})

module.exports=router