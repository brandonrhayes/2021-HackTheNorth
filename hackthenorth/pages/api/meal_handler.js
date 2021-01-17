var async = require("async");
var fs = require("fs");
var pg = require("pg");

// Connect to the "modern-puma-267.defaultdb" database with Kevin's credentials
var config = {
  user: "kevin",
  password: "password1234567890",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  database: "modern-puma-267.defaultdb",
  port: 26257,
  ssl: {
    ca: fs.readFileSync("./server/db/certs/cc-ca.crt").toString(),
  },
};

//List of all the functions
//----------------------------------
//- InsertSponsor
//- update sponsor data
//- delete sponsor data
//- retrieve sponsor data
//- insert student
//- update student
//- delete student
//- update sponsor click count (add field/count to both student and sponsor count)
//- update foodCard data

// Create a pool.
var pool = new pg.Pool(config);
export default function handler(req, res) {
  id = 1;
  ouput = retrieveSponsor(id);
  res.status(200).json(ouput);
}
