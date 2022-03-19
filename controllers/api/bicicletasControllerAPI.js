let Bicicleta = require('../../models/bicicleta')

exports.bicicleta_list = function(req,res){
    res.status(200).json({
        bicicletas: JSON.stringify(Bicicleta.allBicis())
        
    })
}
exports.bicicleta_create = function(req,res){
    let bici = new Bicicleta(req.body.id,req.body.color,req.body.modelo,req.body.lat,req.body.lon);
    /*let bici = {
        id: req.body.id,
        color: req.body.color,
        modelo: req.body.modelo,
        lat: req.body.lat,
        lon: req.body.lon
      };*/
    Bicicleta.create(bici)
    console.log(req.body)
    res.status(200).json({
        bicicleta:bici
    })
}

exports.bicicleta_delete = function(req,res){
    Bicicleta.delete(req.body.id)
    res.status(204).send()
}
