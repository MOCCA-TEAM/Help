const connection = require('../database/connection');

module.exports = {

    async index (request,response) {
        const foods = await connection('foods').select('*');
        return response.json(foods);
     },
    async create (request, response){
        const { tipo, preco, valornutricional } = request.body;
        const petshop_id = request.headers.authorization;
        const [id] = await connection('foods').insert({
            tipo,
            preco,
            valornutricional,
            petshop_id,
        })
        return response.json({ id });
    }
};
