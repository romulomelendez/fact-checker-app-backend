import express, { json } from 'express'
import cors from 'cors'

import 'dotenv/config'

import { router } from './routes'

const PORT = process.env.PORT || 5000

const app = express()

app.use(json())
app.use(cors())
app.use(router)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))