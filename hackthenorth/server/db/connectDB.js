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
    ca: fs.readFileSync("certs/cc-ca.crt").toString(),
  },
};

//List of all the functions
//----------------------------------
//- InsertSponsor
//- update sponsor data
//- delete sponsor data
//- insert student
//- update student
//- delete student
//- update sponsor click count (add field/count to both student and sponsor count)
//- toggle show sponsor data (boolean)
//-

// Create a pool.
var pool = new pg.Pool(config);

function createSponsor() {
  pool.connect(function (err, client, done) {
    // Close communication with the database and exit.
    var finish = function () {
      done();
      process.exit();
    };
    //checks for errors
    if (err) {
      console.error("could not connect to cockroachdb", err);
      finish();
    }
    async.waterfall(
      [
        // function (next) {
        //   // Create the 'sponsors' table.
        //   client.query(
        //     "CREATE TABLE IF NOT EXISTS sponsors (id INT PRIMARY KEY, fname varchar, lname varchar, org varchar);",
        //     next
        //   );
        // },
        function (results, next) {
          // Insert 3 rows into the 'sponsors' table.
          client.query(
            "INSERT INTO sponsors (id, fname, lname, org) VALUES (51 , 'Edmund', 'Lui', 'HTN'), (52, 'Adams', 'Liu', 'HTN'), (81, 'Brandon', 'Hayes', 'HTN');"
          );
          console.log("YOOYOYO");
        },
      ],
      function (err, results) {
        if (err) {
          console.error(
            "Error inserting into and selecting from sponsors: ",
            err
          );
          console.log("OYOYOYOY");
          finish();
        }
        finish();
      }
    );
  });
  // Your code goes here.
  // For more information, see the 'node-postgres' docs:
  // https://node-postgres.com
}

var result = createSponsor();
console.log(result);
