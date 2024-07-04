const { Client } = require ('pg')

const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

const connectDB = async () => {
    client
    .connect()
    .then(() => {7
        console.log(' a conexao funcionou');
    }).catch((err) => {
        console.error('erro ao conectar na db')
    });
};

module.exports = connectDB