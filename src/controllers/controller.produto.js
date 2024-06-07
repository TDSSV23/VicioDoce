import ProdutoModel from "../models/model.produto.js";

class ProdutoController {

    static getAllProdutos(req, res) {
        try {
            ProdutoModel.getAllProdutos(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( {error: "Ocorreu um erro ao buscar os produtos."} );
                }

                return res.status(200).json(result);
            });
            
        } catch (error) {
            // Captura qualquer exceção não tratada
            console.error(error);
            // Retorna uma resposta de erro 500
            res.status(500).json( { error: "Erro interno no servidor." } );
        }
    }

}

export default ProdutoController;