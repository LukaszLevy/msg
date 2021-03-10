const { MongoClient } = require("mongodb");
const url = process.env.MongoUrl;

// app.get('/db', function(req, res){
    const get_db = (req, res) => {
        async function get_contact_db(req, res) {
            try {
              const client = await new MongoClient(url, {useUnifiedTopology: true});
              await client.connect();
              const database = client.db("contact");
              const collection = database.collection("contact");
              await collection.find({}).toArray(function(err, result){
                if(err) throw err;
                if(result == "") {console.log("Brak wyników")}
                else{
                  res.send(result);
                }
              });
            } finally {
              const client = await new MongoClient(url, {useUnifiedTopology: true});
              await client.close();
            }
          }
          get_contact_db(req, res).catch();
    }
    const add_to_db = (req, res) => {
        async function add_to_db(req, res) {
            try {
              const client = await new MongoClient(url, {useUnifiedTopology: true});
              await client.connect();
              const database = client.db("contact");
              const collection = database.collection("contact");
              console.log(req.body.imie)
              await collection.insertOne({imie: req.body.imie, nazwisko: req.body.nazwisko, telefon: req.body.telefon}, function(err, res){
                if (err) throw err;
                client.close();
              })
        
            } catch (e) {
              res.send('nie zapisano');
              client.close();
            }
          }
          add_to_db(req, res);
    }
    
//   })
exports.get_db = get_db;
exports.add_to_db = add_to_db;