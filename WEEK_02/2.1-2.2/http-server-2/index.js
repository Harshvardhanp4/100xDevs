 const express = require('express')
const app = express()
const port = 3000

app.get("/route-handler",(req,res)=>{
    //headers,body,query
    res.json({
        name: "Harsh",
        age: 21
    })
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
