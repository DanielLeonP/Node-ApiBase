const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const { q, nombre = 'Vacio', apikey = 1 } = req.query;
    // res.status(200);
    res.json({ 'msg': 'GET api', nombre, apikey, q });
}

const userPut = (req = request, res = response) => {
    const { id } = req.params;
    res.status(200);
    res.json({ 'msg': 'PUT api', id });
}
const userPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;

    res.status(201);
    res.json({ 'msg': 'POST api', "User": { nombre, edad } });
}
const userDelete = (req = request, res = response) => {
    // res.status(200);
    res.json({ 'msg': 'DELETE api' });
}
const userPatch = (req = request, res = response) => {
    // res.status(200);
    res.json({ 'msg': 'PATCH api' });
}
module.exports = {
    userGet,
    userDelete,
    userPatch,
    userPost,
    userPut
}