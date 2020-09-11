const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const petshops_id = request.headers.authorization;

        const itens = await connection('itens')
            .where('petshop_id', petshops_id)
            .select('*');

        return response.json(itens);
    }
}