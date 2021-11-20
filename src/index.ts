import express from 'express'

const app = express()
const router = require('./routes/routes')

app.use(express.json())
app.use(express.raw())
app.use(router)

app.listen(8080, () => {
    console.log('Server running in http://localhost:8080')
})