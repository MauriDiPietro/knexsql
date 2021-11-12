const services = require('../services/services.vehiculos');

const list = async (req, res) => {
    try {
        const listAll = await services.listAutos();
        res.json(listAll)
    } catch(error){
        res.status(400).json(error.message)
    }
};

const single = async (req, res)=>{
    try{
        const listSingle = await services.listAutos({id: req.params.id})
        res.json(listSingle)
    }catch(error){
        res.status(400).json(error.message)
    }
};

const created = async(req, res)=>{
    try{
        // const {marca, nombre, modelo} = req.body
        // const vehiculo = {
        //     marca,
        //     nombre,
        //     modelo
        // }
        const vehiculo = ({marca, nombre, modelo} = req.body);
        await services.createAuto(vehiculo)
        res.status(200).send('Vehiculo creado con éxito!')
    }catch(error){
        res.status(400).json(error.message)
    }
};

const updated = async(req, res)=>{
    try{
        const vehiculo = ({marca, nombre, modelo} = req.body);
        const {id} = req.params;
        await services.updateAuto(id, vehiculo)
        res.send(`Datos del vehiculo id: ${id} actualizados`)
    }catch(error){
        res.status(400).json(error.message)
    }
};

const deleted = async(req, res)=>{
    try{
        const {id} = req.params
        await services.deleteAuto(id)
        res.send(`Vehiculo con id: ${id} eliminado`)
    }catch(error){
        res.status(400).json(error.message)
    }
};

module.exports = {
    list,
    single,
    created,
    updated,
    deleted
}