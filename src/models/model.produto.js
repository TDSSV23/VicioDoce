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


}

export default ProdutoModel;