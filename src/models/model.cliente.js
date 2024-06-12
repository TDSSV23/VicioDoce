import bcrypt from "bcrypt";
import { con } from "../config/database.js";

class ClienteModel {

    // Método para obter todos os cliente
    static getAllClientes(callback) {
        let sql = `select * from cliente`;

        con.query(sql, function(err, result){
            if (err)
                callback(err, null);
            else 
                callback(null, result);
        });
    }

    // Método para criar um novo cliente
    static createCliente(nome, email, senha, callback) {
        let sql = `insert into cliente(nome, email, senha) values (?,?,?)`;

        // Criptografar senha
        const hash = bcrypt.hashSync(senha, 10);
        senha = hash;
        con.query(sql, [nome, email, senha], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    // Método para editar um cliente existente
    static editCliete(id, nome, email, callback) {
        let sql =`update cliente set nome=?, email=? where id_cliente=?`;

        con.query(sql, [nome, email, id], function(err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        })
    }

    // Método para remover um cliente
    static removeCliente(id, callback) {
        let sql = `delete from cliente where id_cliente=?`;

        con.query(sql, [id], function(err, result){
            if (err)
                callback(err, null)
            else
                callback(null, result)
        });
    }
   
}

export default ClienteModel;