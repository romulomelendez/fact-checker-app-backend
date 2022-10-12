import express, { json } from 'express'

import { router } from './routes'

const PORT = process.env.PORT || 5000

const app = express()

app.use(json())
app.use(router)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))