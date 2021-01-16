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

// Create a pool.
var pool = new pg.Pool(config);

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
      function (next) {
        // Create the 'sponsors' table.
        client.query(
          "CREATE TABLE IF NOT EXISTS sponsors (id INT PRIMARY KEY, fname varchar, lname varchar, org varchar);",
          next
        );
      },
      function (results, next) {
        // Insert 3 rows into the 'sponsors' table.
        client.query(
          "INSERT INTO sponsors (id, fname, lname, org) VALUES (12, 'Edmund', 'Lui', 'HTN'), (22, 'Adams', 'Liu', 'HTN'), (33, 'Brandon', 'Hayes', 'HTN');",
          next
        );
      },
      function (results, next) {
        // Print out sponsors list.
        client.query("SELECT * FROM sponsors;", next);
      },
    ],
    function (err, results) {
      if (err) {
        console.error(
          "Error inserting into and selecting from sponsors: ",
          err
        );
        finish();
      }

      console.log("Initial rows:");
      results.rows.forEach(function (row) {
        console.log(row);
      });

      finish();
    }
  );
});
// Your code goes here.
// For more information, see the 'node-postgres' docs:
// https://node-postgres.com
