
const db = require('../data/dbConfig');

const find = () => {
    return db('schemes')
}

const findById = (id) => {
    return db('schemes')
    .where({ id })
    .first()
    .then(scheme => {
        if (scheme) {
          return scheme;
        } else {
          return null;
        }
    })
}

const findSteps = (id) => {
    return db('schemes')
    .innerJoin('steps', 'schemes.id', 'steps.scheme_id')
    .where({ scheme_id: id })
    .select('schemes.scheme_name', 'step_number', 'instructions' )
}

const add = (scheme) => {
    return db('schemes')
    .insert(scheme, 'id')
    .then(schemes => {
        const SchemeID = schemes[0];
        return SchemeID
    })
}

const update = (changes, id) => {
    return db('schemes').where({ id })
    .update(changes)
    .then(changed => {
        if(changed) {
            return changed
        }
    })
}

const remove = (id) => {
    return db('schemes').where({ id })
    .delete()
    .then(scheme => {
        if(scheme) {
            return scheme
        } else {
            return null;
        }
    })
}


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}


