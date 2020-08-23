const getDb = require("./database.mongo").getDb;

class Airbnb {
  constructor() {}
  getData(cb) {
    getDb((db) => {
      db.collection("listingsAndReviews")
        .find()
        .limit(10)
        .toArray()
        .then((results) => {
          cb(results);
        });
    });
  }

  getById(id, cb) {
    getDb((db) => {
      db.collection("listingsAndReviews")
        .find({ _id: id })
        .limit(1)
        .toArray()
        .then((results) => {
          cb(results);
        });
    });
  }

  updateById(id, name, cb) {
    console.log(name, id, "update");
    getDb((db) => {
      db.collection("listingsAndReviews")
        .updateOne(
          { _id: id },
          {
            $set: { name: name },
          }
        )
        .then((results) => {
          cb(results);
        });
    });
  }

  deleteById(id, cb) {
    getDb((db) => {
      db.collection("listingsAndReviews")
        .deleteOne({ _id: id })
        .then(() => {
          cb();
        });
    });
  }
}

module.exports = Airbnb;
