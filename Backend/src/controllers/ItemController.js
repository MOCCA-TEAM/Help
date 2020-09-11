const connection = require('../database/connection');

module.exports = {
  
    async index(request,response){

        const itens = await connection('itens').select('*');
        return response.json(itens);

    },

    async create(request, response){
        const { name, price, description } = request.body;
        const petshop_id = request.headers.authorization;

    const [id] = await connection('itens').insert({
        name,
        price,
        description,
        petshop_id
    });
    
    return response.json({ id });
    },

    async delete(request, response){
        const {id} = request.params;
        const petshop_id = request.headers.authorization;
        var itens = await connection('itens')
            .where('id', id)
            .select('petshop_id')
            .first()
        if(itens.petshop_id !== petshop_id){
            return response.status(401).json({ error: 'Operation is not permitted.' })
        }
        await connection('itens').where('id', id).delete();

        return response.status(204).send();
    }
};