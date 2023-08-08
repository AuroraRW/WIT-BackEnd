const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const bcrypt = require('bcrypt')

const accessSecret = crypto.randomBytes(64).toString('hex')
const refreshSecret = crypto.randomBytes(64).toString('hex')
app.use(express.json())

let refreshTokens = []
app.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { email: req.body.email, password: hashedPassword }
        // save this user into database
        
        res.status(201).send(user)
    } catch {
        res.status(500).send("fail")
    }
})

app.post('/login', async (req, res) => {
    const hashedPassword = await bcrypt.hash("123456", 10)
    let user = { email: "abc@gmail.com", password: hashedPassword }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            if (user.email == req.body.email) {
                const userJWT = { email: req.body.email }
                const accessToken = jwt.sign(userJWT, accessSecret, { expiresIn: '60s' })
                const refreshToken = jwt.sign(userJWT, refreshSecret)
                refreshTokens.push(refreshToken)
                res.send({ accessToken: accessToken, refreshToken: refreshToken })
            } else {
                res.send('Not Allowed')
            }
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

app.get('/cards', authenticateToken, (req, res) => {
    res.json(req.user.email)
    // send back the data to client
})

function authenticateToken(req, res, next) {
    // console.log(req.headers)
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, accessSecret, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, refreshSecret, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = jwt.sign({ email: user.email }, accessSecret, { expiresIn: '60s' })
        res.json({ accessToken: accessToken })
    })
})

app.delete('/logout', (req, res) => {
    // delete token from client

    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})
app.listen(4000, () => {
    console.log('server is runing........')
})