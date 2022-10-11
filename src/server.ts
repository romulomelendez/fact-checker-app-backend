import express from 'express'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json('Olá')
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))