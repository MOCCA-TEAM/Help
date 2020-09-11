const connection = require('../database/connection');

module.exports = {
    async index(request,response){
        const{page = 1} = request.query;

        const [count] = await connection('itens').count();

        const itens = await connection('itens')
            //.join('petshops', 'petshops.id', '=', 'itens.petshops_id')
            .limit(5)
            .offset((page-1) * 5)
            .select([
                'itens.*', 
                /*
                'petshops.name', 
                'petshops.email', 
                'petshops.whatsapp',
                'petshops.city',
                'petshops.uf'
                */
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(itens);
    },

    async create(request, response){
        const { name, price, description, picture } = request.body;
        const petshops_id = request.headers.authorization;

    const [id] = await connection('itens').insert({
        name,
        price,
        description,
        //picture
        petshops_id
    })
    
    return response.json({ id });
    },

    async delete(request, response){
        const {id} = request.params;
        const petshops_id = request.headers.authorization;
        var itens = await connection('itens')
            .where('id', id)
            .select('petshops_id')
            .first()
        if(itens.petshops_id !== petshops_id){
            return response.status(401).json({ error: 'Operetion not permitted.' })
        }
        await connection('itens').where('id', id).delete();

        return response.status(204).send();
    }
};