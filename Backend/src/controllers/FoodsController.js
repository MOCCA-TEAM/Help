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
    },
    async delete(request, response){
        const { id } = request.params;
        const petshop_id = request.headers.authorization;

        const foods = await connection('foods')
        .where('id', id)
        .select('petshop_id')
        .first()
        if (foods.petshop_id != petshop_id){
            return response.status(401).json({ error: 'Operation not permitted'})
        }
        await connection('foods').where('id', id).delete()

        return response.status(204).send();
    }
};
