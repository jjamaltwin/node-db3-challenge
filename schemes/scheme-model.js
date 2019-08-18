const db = require("../data/dbConfig");
//const db = require("../data/dbConfig") = knex(configOptions);



module.exports = {
    find,
    findById
  };




function find() {
    return db('schemes')
}



function findById(id) {
    return db('schemes')
      .where({ id })
      .first()
  
  }



