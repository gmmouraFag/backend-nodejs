const express = require('express')
const cors = require('cors')
const port = 3000
const app = express()

app.use(cors())
app.get('/', (req, res) =>{
    
    res.send('eae zé')

})
app.get('/usuarios/:id', (req, res) =>{
    
    res.send({"NOME":"JOSE", "IDADE": "18"})

})

app.listen(port, () => {
    console.log("rodando")
})

