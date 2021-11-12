const db = require('../db');
const dotenv = require('dotenv');
dotenv.config();

const listAutos = (id={}) => {
    return db(process.env.T_NAME)
    .where(id)
    .select(
        'id',
        'marca',
        'nombre',
        'modelo'
    );
};

const createAuto = (obj) => {
    return db(process.env.T_NAME).insert(obj)
};

const updateAuto = (id, obj) => {
    return db(process.env.T_NAME).where('id', id).update(obj)
};

const deleteAuto = (id) => {
    return db(process.env.T_NAME).where('id', id).del()
};

module.exports = {
    listAutos,
    createAuto,
    updateAuto,
    deleteAuto
}