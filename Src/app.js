const path = require('path')
const express = require('express')
const hbs = require('hbs')


pathtopublic=path.join(__dirname,'../public')
pathtopartials=path.join(__dirname,'../Public/Partials')
//pathtoviews=path.join(__dirname,'../templates')

const app = express()

//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))

console.log(pathtopartials)

app.set('view engine', 'hbs')
//app.set('views', pathtoviews)
hbs.registerPartials(pathtopartials)
app.use(express.static(pathtopublic))

// app.get('', (req, res) =>{
//     res.send('Displaying the root page')
// })

// app.get('/about', (req, res) =>{
//     res.send('Displaying the about page')
// })

app.get('',(req, res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'Biswajit'
    })
})

app.get('/about',(req,res)=>{
    res.render('about', {
        title: 'About page',
        name: 'Biswajit'
    })

})

app.get('/help',(req,res)=>{
    res.render('help', {
        title: 'Help page',
        name: 'Biswajit'
    })

})

app.get('/weather', (req, res) =>{
    res.send([
        {
            name: 'Biswajit',
            age : 43
        },
        {   
            name : 'Soma',
            age : 40
        }])
})

app.get('*',(req,res)=>{
    res.send('My 404 page')
})

app.listen(3000, ()=>{
    console.log('listening on port :3000')
})