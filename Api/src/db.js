const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const { DB_USER, DB_PASWWORD, DB_CLUSTER } = process.env




const client = new MongoClient(`mongodb+srv://${DB_USER}:${DB_PASWWORD}@${DB_CLUSTER}.oovupfq.mongodb.net/?retryWrites=true&w=majority`, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        await client.db("admin").command({ ping: 1 });

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}



run().catch(console.dir);
