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
//- retrieve sponsor data
//- insert student
//- update student
//- delete student
//- update sponsor click count (add field/count to both student and sponsor count)
//- update foodCard data

// Create a pool.
var pool = new pg.Pool(config);

function insertSponsor(sponsorid, fname, lname, email_address) {
  pool.connect(function (err, client, done) {
    //checks for errors
    if (err) {
      console.error("could not connect to cockroachdb", err);
      done();
    }

    var q =
      "INSERT INTO sponsors (sponsorid, fname, lname, email_address) VALUES (" +
      sponsorid +
      ",'" +
      fname +
      "','" +
      lname +
      "','" +
      email_address +
      "')";

    console.log(q);
    client.query(q);
    console.log("YOOYOYO");
    done();
  });
}

export function updateSponsor(id, fname, lname, email_address) {
  pool.connect(function (err, client, done) {
    //checks for errors
    if (err) {
      console.error("could not connect to cockroachdb", err);
      done();
    }
    async.waterfall(
      [
        function (next) {
          // Create the 'sponsors' table.
          client.query(
            "UPDATE sponsors SET fname = '" + fname + "' WHERE sponsorid=" + id,
            next
          );
        },
        function (results, next) {
          // Insert 3 rows into the 'sponsors' table.
          client.query(
            "UPDATE sponsors SET lname = '" + lname + "' WHERE sponsorid=" + id,
            next
          );
        },

        function (results, next) {
          // Print out sponsors list.
          client.query(
            "UPDATE sponsors SET email_address = '" +
              email_address +
              "' WHERE sponsorid=" +
              id,
            next
          );
        },
      ],
      function (err, results) {
        if (err) {
          console.error(
            "Error inserting into and selecting from sponsors: ",
            err
          );
          done();
        }
        done();
      }
    );
  });
}
export function deleteSponsor(id) {
  pool.connect(function (err, client, done) {
    //checks for errors
    if (err) {
      console.error("could not connect to cockroachdb", err);
      done();
    }

    var q = "delete from sponsors where sponsorid=" + id;

    console.log(q);
    client.query(q);

    done();
  });
}

export function retrieveSponsor(id) {
  pool.connect(function (err, client, done) {
    //checks for errors
    if (err) {
      console.error("could not connect to cockroachdb", err);
      done();
    }

    var q =
      "select fname, lname, email_address from sponsors where sponsorid=" + id;

    console.log(q);
    client.query(q).then(function (result) {
      return result["rows"][0];
    });

    done();
  });
}

export function insertStudent(id, name, email_address) {
  pool.connect(function (err, client, done) {
    //checks for errors
    if (err) {
      console.error("could not connect to cockroachdb", err);
      done();
    }

    var q =
      "INSERT INTO student (studentid, name, email_address) VALUES (" +
      id +
      ",'" +
      name +
      "','" +
      email_address +
      "')";

    console.log(q);
    client.query(q);
    console.log("YOOYOYO");
    done();
  });
}

export function updateStudent(id, name, email_address) {
  pool.connect(function (err, client, done) {
    //checks for errors
    if (err) {
      console.error("could not connect to cockroachdb", err);
      done();
    }
    async.waterfall(
      [
        function (next) {
          // Create the 'students' table.
          client.query(
            "UPDATE students SET name = '" + name + "' WHERE studentid=" + id,
            next
          );
        },
        function (results, next) {
          // Insert rows into the 'students' table.
          client.query(
            "UPDATE students SET email_address = '" +
              email_address +
              "' WHERE studentid=" +
              id,
            next
          );
        },
      ],
      function (err, results) {
        if (err) {
          console.error(
            "Error inserting into and selecting from students: ",
            err
          );
          done();
        }
        done();
      }
    );
  });
}
export function deleteStudent(id) {
  pool.connect(function (err, client, done) {
    //checks for errors
    if (err) {
      console.error("could not connect to cockroachdb", err);
      done();
    }

    var q = "delete from students where studentid=" + id;

    console.log(q);
    client.query(q);

    done();
  });
}
