const express = require('express')
const cors = require('cors')
const needle = require('needle')

const app = express()
app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get("/", (req, res) => {
    // console.info("request Captured")
    let data = { data: "ping" }
    res.send(JSON.stringify(data))
})

app.post("/", async (req, res) => {
    console.info("request Captured")
    console.log(req.body.url)
    let data = { msg: "post response" }
    needle.get(req.body.url, (err, res1, body) => {
        if (err) {
            console.error(err);
        };
        data["data"] = body
        console.log(data)
        res.set('Content-Type', 'text/html')
        res.send(JSON.stringify(data))

    });
})

app.get("/test", (req, res) => {
    let data = { data: "test" }
    res.send(JSON.stringify(data))
})

const port = 4000
app.listen(port | 4000, () => {
    console.log(`Listening to port : ${port}`)
})