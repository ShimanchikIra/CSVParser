import {User} from "./config";
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

export function addUsersToDB (users: User[], dbName: string, dbCollection: string): void {
    mongoClient.connect(function(err, client){

        const db = client.db(dbName);
        const collection = db.collection(dbCollection);
        for (let i=0; i<users.length; i++){
            collection.insertOne(users[i], function(err, result){
                if(err){
                    return console.log(err);
                }
                console.log(result.ops);
                client.close();
            });
        }
    });
}

