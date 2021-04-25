const MongoClient = require('mongodb').MongoClient;
const config = require('../../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const uri = `mongodb+srv://${USER}:${PASSWORD}@productos.zzwuk.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const collection = collection =>
  client.db(config.dbName).collection(collection);

module.exports = {client, collection};
