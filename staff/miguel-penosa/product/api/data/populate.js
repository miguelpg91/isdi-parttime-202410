import mongodb from "mongodb"

const { MongoClient } = mongodb

const client = new MongoClient("mongodb://localhost:27017")

client.connect()
    .then(connection => {
        const db = connection.db("test")

        const users = db.collection("users")

        users.insertOne({ name: "Peter Pan", email: "peter@pan.com", username: "peterpan", password: "123123123" })
            .then(result => console.log(result))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
