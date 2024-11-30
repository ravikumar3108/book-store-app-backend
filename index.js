const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors')


const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/books", require("./routes/bookRoutes"))
app.use("/api/orders", require("./routes/orderRoutes"))
app.use("/api/auth", require("./routes/userRoutes"))
app.use("/api/admin", require("./adminStats/adminStat"))

async function main() {
    await mongoose.connect(process.env.CONNECTION_STRING);
}

main().then(() => console.log("MongoDb Connected successfully")).catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`server start on ${port}`)
})