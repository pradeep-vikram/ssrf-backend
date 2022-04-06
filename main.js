const express = require('express')

const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("ping")
})

const port = 3000
app.listen(port | 3000, () => {
    console.log(`Listening to port : ${port}`)
})