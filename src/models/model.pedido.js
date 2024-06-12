import { con, query } from "../config/database.js";

class PedidoModel {

    static getAllPedidos(callback) {
        let sql = `select * from pedido`;

        con.query(sql, function (err, result) {
            if (err) {
                callback(err, null);

            } else {
                callback(null, result);
            }
        });
    }

    static createPedido(dados, callback) {
        let sql = `insert into pedido(id_cliente, nome, email, fone,
            end_lougradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total) 
            values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        con.query(sql, [dados.id_cliente, dados.nome, dados.email, dados.fone,
        dados.end_lougradouro, dados.end_numero, dados.end_bairro, dados.end_cidade, dados.end_uf, dados.end_cep, dados.total], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                let id_pedido = result.insertId;
                console.log(id_pedido);

                // Itens Pedido
                for (let item of dados.itens) {
                    sql = 'insert into pedido_item(id_pedido, id_produto, quantidade, valor_unitario) values (?, ?, ?, ?)';

                    let result_item_pedido = await query(sql, [id_pedido, item.id_produto, item.quantidade, item.valor_unitario]);

                    // Detalhes Bolo
                    if (item.detalhe_bolo) {
                        let formato = item.detalhe_bolo.formato;
                        let cor = item.detalhe_bolo.cor;
                        let decoracao = item.detalhe_bolo.decoracao;
                        
                        sql = `insert into detalhe_bolo (pedido_item_id_item, formato, cor, decoracao) values (?, ?, ?, ?)`;

                        await query(sql, [result_item_pedido.insertId, formato, cor, decoracao]);
                    }
                }

                callback(null, result);
            }
        });
    }

}

export default PedidoModel;