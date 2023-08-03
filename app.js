////////////////////for node///////////////////////
// // import / require
// const http = require('http')
// const server = http.createServer((req, res)=>{
//     console.log('Hello World ')
//     let url = req.url
//     let method = req.method
//     console.log(url)
//     console.log(method)
//     if(url==='/'){
//         res.write('<html>');
//         res.write('<head><title>Home</title><head>');
//         res.write('<body><h1>This is home page !!!!</h1></body>');
//         res.write('</html>');
//         return res.end()
//     }
//     if(url==='/cards'){
//         res.write('<html>');
//         res.write('<head><title>Cards</title><head>');
//         res.write('<body><h1>This is card page</h1></body>');
//         res.write('</html>');
//         return res.end()
//     }
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
// })
// server.listen(4000, ()=>{
//     console.log('server is runing........')
// })
//////////////////////for express//////////////////////////
const express = require('express')
const app = express()
// ////////// No. 1 middleware ///////////////////////
// app.use((req, res, next)=>{
//     console.log('In the middleware!')
//     next()
// })
// app.use((req, res, next)=>{
//     console.log('In another middleware!')
//     next()
// })
// app.use((req, res, next)=>{
//     console.log('In third middleware!')
// })

// ////////////////No. 2 different routes /////////////////
// app.use('/', (req, res, next) => {
//     if(req.originalUrl !== '/favicon.ico'){
//         console.log('This always runs!');
//     }
//     next()
// });

// app.use('/cards', (req, res, next) => {
//     if(req.originalUrl !== '/favicon.ico'){ 
//         console.log('In another middleware!');
//         res.send('<h1>The cards</h1>');
//     }
  
// })

// app.use('/', (req, res, next) => {
//     if(req.originalUrl !== '/favicon.ico'){
//         console.log('In third middleware!');
//         res.send('<h1>Home page</h1>');
//     }
// })

// /////////////////No. 3 get / post //////////////
// app.use(express.urlencoded({extended: false}))
// app.use(express.json())

// app.get('/create', (req, res, next) => {
//     res.send('<form action="/cards" method="POST"><label>card name:</label><input type="text" name="title"><button type="submit">submit</button></form>');
// });

// app.get('/cards', (req, res, next) => {
//     res.send('<h1>This is cards page</h1>');
// });

// app.post('/cards', (req, res, next) => {
//     // res.send(req.body)

//     console.log(req.body);
//     res.redirect('/cards');
// });

// //////////// No. 4 route module//////////////////
// const allRoutes = require('./routes/route')
// app.use(express.urlencoded({extended: false}))
// app.use(express.json())

// app.use(allRoutes)

// app.use((req, res, next) => {
//     res.send('<h1>Page not found</h1>');
// });

// /////////// No. 5 view (MVC) ///////////
// const allRoutes = require('./routes/routeFile')
// const path = require('path')
// // console.log(path.join(__dirname, 'views', '404.html'))

// app.use(express.urlencoded({extended: false}))
// app.use(express.json())

// app.use(allRoutes)

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

// //////////////No. 6 add css ///////////////

const allRoutes = require('./routes/routeFile')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(allRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000, ()=>{
    console.log('server is runing........')
})