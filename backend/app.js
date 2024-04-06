import express from 'express'
import { getProperties, getProperty, addProperty } from './database.js'


const app = express()

app.get('/properties', async (req, res) => {
    const properties = await getProperties()
    res.send(properties)
})

app.get('/properties/:id', async (req, res) => {
    const id = req.params.id
    const note = await getProperty(id)
    res.send(note)
})

app.post('/addProperty', async (req, res) => {
    const { }
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("Something broke!")
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})