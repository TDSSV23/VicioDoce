import bcrypt from "bcrypt";
import { con } from "../config/database.js";

class UsuarioModel {

    // Método para obter todos os usuários
    static getAllUsuarios(callback) {
        let sql = `select * from usuario`;

        con.query(sql, function(err, result){
            if (err)
                callback(err, null);
            else 
                callback(null, result);
        });
    }

    // Método para criar um novo usuário
    static createUsuario(nome, email, senha, callback) {
        let sql = `insert into usuario(nome, email, senha) values (?,?,?)`;

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

    // Método para editar um usuário existente
    static editUsuario(id, nome, email, callback) {
        let sql =`update usuario set nome=?, email=? where id_usuario=?`;

        con.query(sql, [nome, email, id], function(err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        })
    }

    // Método para remover um usuário
    static removeUsuario(id, callback) {
        let sql = `delete from usuario where id_usuario=?`;

        con.query(sql, [id], function(err, result){
            if (err)
                callback(err, null)
            else
                callback(null, result)
        });
    }
   
}

export default UsuarioModel;