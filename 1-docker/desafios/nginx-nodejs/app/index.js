const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

// const create_table = `CREATE TABLE people(id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id));`
// connection.query(create_table)

const insert_user = `INSERT INTO people(name) values('Pery')`
connection.query(insert_user)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port);  
})