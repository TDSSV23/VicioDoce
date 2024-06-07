import UsuarioModel from "../models/model.usuario.js";

class UsuarioController {

    static getAllUsuarios(req, res){
        try {
            UsuarioModel.getAllUsuarios(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( { error: "Ocorreu um erro ao buscar os usuários."} );
                }

                if (!result[0]) {
                    return res.status(404).json( { message: "Não foram encontrados usuários."} );
                }

                return res.status(200).json(result);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }

    static createUsuario(req, res) {
        const p = req.body;
        const nome = p.nome;
        const email = p.email;
        const senha = p.senha;

        try {
            UsuarioModel.createUsuario(nome, email, senha, function(err, result){
                if (err) {
                    console.error('Erro ao cadastrar usuario: ', err);
                    return res.status(500).json( { error: "Ocorreu um erro ao cadastrar o usuário." } );
                }

                return res.status(201).json( { 
                    message: "Usuário inserido com sucesso.",
                    data: {
                        id: result.insertId,
                        nome, 
                        email
                    }
                 } );
            });

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno do servidor." } );
        }
    }
    static editUsuario(req, res){
        const id = req.params.id;
        const p = req.body;
        const nome = p.nome;
        const email = p.email;
        
        try {
            UsuarioModel.editUsuario(id, nome, email, function(err, result){
                if (err) {
                    console.error("Erro ao editar o usuário: ", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao editar o usuário." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Usuário não encontrado." } );
                }

                return res.status(200).json(
                    {
                        message: "Usuário editado com sucesso.",
                        data: {
                            id, nome, email
                        }
                    }
                );
            });
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor." } );
        }
    }

    static removeUsuario(req, res) {
        let id = req.params.id;

        try {
            UsuarioModel.removeUsuario(id, function(err, result){
                if (err) {
                    console.error("Erro ao deletar usuário: ", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao deletar o usuário." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Usuário não encontrado." } ) 
                }
                
                return res.status(200).json( { message: "Usuário deletado com sucesso.", data: ( id ) } );
            });
            
            
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "Erro interno no servidor."});
        }
    }
}

export default UsuarioController;