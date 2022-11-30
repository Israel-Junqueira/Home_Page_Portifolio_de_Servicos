const db = require('../../banco/dbConexao')

module.exports = class PortifolioModel{
    static getTodos(callback){
        return db.query("SELECT * FROM portifolio",callback);
    }

    static getId(id,callback){
        return db.query("SELECT * FROM portifolio WHERE idTable_01 = ?",[id],callback)
    }

    static adicionar(portifolio,callback){
        return db.query("INSERT INTO portifolio(descricao,detalhes) VALUES(?,?)",
        [portifolio.descricao,portifolio.detalhes],callback);
    }

    static deletar(id,callback){
        return db.query("DELETE FROM portifolio WHERE idTable_01 = ?",[id],callback)
    }
}