import express, { json } from 'express'
import cors from 'cors'


const app = express()


import "./model/colaboradorModel.js"



app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

export default app;

