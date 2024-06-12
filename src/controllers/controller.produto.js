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
    static createProduto(req, res) {
        const p = req.body;
        const nome = p.nome;
        const descricao = p.descricao;
        const preco = p.preco;
        const foto = p.foto;

        try {
            ProdutoModel.createProduto(nome, descricao, preco, foto, function(err, result){
                if (err) {
                    console.error('Erro ao cadastrar produto: ', err);
                    return res.status(500).json( { error: "Ocorreu um erro ao cadastrar o produto." } );
                }

                return res.status(201).json( { 
                    message: "Produto inserido com sucesso.",
                    data: {
                        id: result.insertId,
                        nome, 
                        descricao,
                        preco,
                        foto
                    }
                 } );
            });

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno do servidor." } );
        }
    }

}

export default ProdutoController;