var crypto = require("crypto");
var connection = require('../database/connection');
var i = 0;
module.exports = {
    async create (request, response){
    var [ count ] = await connection('petshops').count();
    var id = crypto.randomBytes(4).toString('hex');
    var confirmation;

    while (i < count){
        confirmation = await connection('petshops').where('id', id);
        if(confirmation){
            id = crypto.randomBytes(4).toString('hex');
            i = 0;
        }
    }
        
    var {name, description, email, phone, city, uf} = request.body;

    //aguarda o banco ser iniciado antes de prosseguir (await)
    await connection('petshops').insert({
        id,
        name,
        description,
        email,
        phone,
        city,
        uf,
    })
    
    return response.json({ id });
    },

    async delete(request, response){
        var { id } = request.params;
        
        await connection('petshops').where('id', id).delete();

        return response.status(204).send();
    },

    async list(request, response){
        var { page = 1 } = request.query;
        
        var [ count ] = await connection('petshops').count();
        
        var petshops = await connection('petshops')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');

        response.header('X-Total-Count', count['count(*)']);
        
        return response.json(petshops);
    }
};