
var express = require('express');
const PortifolioModel = require('../model/portifolio/PortifolioModel');
var router = express.Router();
var PortfolioModel = require('../model/portifolio/PortifolioModel');
var RespostaClass = require('../model/RespostaClass');

//para buscarmos algo no servidor get
router.get("/:id?",function (req,res,next) {
    PortifolioModel.getId(req.params.id ,function(erro,retorno){
        let resposta = new RespostaClass()
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:',erro); 
        }else{
            resposta.dados = retorno;
        }

        res.json(resposta);
    });
});


//para criar algo no servidor use o verbo post
router.post("/?",function (req,res,next) {

    PortifolioModel.adicionar(req.body,function(erro,retorno){
        let resposta = new RespostaClass()
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:',erro); 
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "cadastro realizado com sucesso";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possivel realizar a operação'
            }
        }
        console.log('erro:',resposta)
        res.json(resposta);
    });
});


//para deletar algum id do banco

router.delete("/:id",function (req,res,next) {

    PortifolioModel.deletar(req.params.id,function(erro,retorno){
        let resposta = new RespostaClass()
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:',erro); 
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "cadastro deletado com sucesso";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possivel excluir o cadastro'
                console.log('erro:',erro); 
            }
        }
        console.log('erro:',resposta)
        res.json(resposta);
    });
});

module.exports = router;

