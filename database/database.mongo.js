const MongoClient = require("mongodb").MongoClient;
const mgUser = process.env.MONGO_USERNAME;
const mgPw = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${mgUser}:${mgPw}@karnati.febc5.mongodb.net/sample_airbnb?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getDb = async (cb) => {
  const connect = await client.connect();
  const mongodb = connect.db();
  cb(mongodb);
};

module.exports = { client, getDb };
