var connection = require('../database/connection');

module.exports = {
    async create(request, response){
        var { id } = request.body;

        var petshop = await connection('petshops')
        .where('id', id)
        .select('name')
        .first();

        if(!petshop){
            return response.status(400).json({ error: 'Não existe Petshop cadastrado com este ID'});
        }
        return response.json(petshop);
    }
};