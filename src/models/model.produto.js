import {con} from "../config/database.js";

class ProdutoModel {

    static getAllProdutos(callback){
        let sql = `select * from produto`;
        
        con.query(sql, function
        (err, result){
            if (err)
                callback(err, null);
            else 
                callback(null, result);
        })
    }

    // Método para criar um novo produto
    static createProduto(nome, descricao, preco, foto) {
        let sql = `insert into produto(nome, descricao, preco, foto) values (?,?,?,?)`;

        
        con.query(sql, [nome, descricao, preco, foto], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }


}

export default ProdutoModel;