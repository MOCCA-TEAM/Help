const connection = require('../database/connection');

module.exports = {

    async index (request,response) {
        const foods = await connection('foods').select('*');
        return response.json(foods);
     },
    async create (request, response){
        const { type, price, ntvalue, category, product } = request.body;
        const petshop_id = request.headers.authorization;
        const [id] = await connection('foods').insert({
            category,
            product,
            type,
            price,
            ntvalue,
            petshop_id,
        })
        return response.json({ id });
    }
};
