import { con } from "../config/database.js";
import bcrypt from "bcrypt";

class ProdutoModel {

    static getAllProdutos(callback) {
        let sql = `select * from produto`;

        con.query(sql, function(err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    // Método para criar um novo produto
    static createProduto(nome, descricao, preco, foto, callback) {
        let sql = `insert into produto(nome, descricao, preco, foto) values (?,?,?,?)`;

        con.query(sql, [nome, descricao, preco, foto], function(err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

     // Método para remover um produto
     static removeProduto(id, callback) {
        let sql = `delete from produto where id_produto=?`;

        con.query(sql, [id], function(err, result){
            if (err)
                callback(err, null)
            else
                callback(null, result)
        });
    }
   
}

export default ProdutoModel;
