const {MongoClient,ServerApiVersion} = require('mongodb')


const url = "mongodb+srv://monukd01dev:admin@cluster0.6rtcg.mongodb.net/?appName=Cluster0"

const client = new MongoClient(url,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

const dbName = 'testing'


async function connectToMongo() {
    
    try {
        await client.connect()
        const myDb = client.db(dbName)
        const myColl = myDb.collection('users')
        const result = await (await myColl.find({}).toArray()).map(e=>e.name)
        console.log('connected successfully to the mongo')
        return result
    } catch (error) {
        console.log("failed to connect to the mongo Erro: ",error)
        return error
    }
    
    
}


connectToMongo()
.then(res => console.log(res))
.catch(error=> console.log(error))
.finally(()=> client.close())
