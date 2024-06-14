import { Router } from "express";
import ProdutoController  from "../controllers/controller.produto.js"; 

const routeProduto = Router();

routeProduto.get("/produtos", ProdutoController.getAllProdutos);
routeProduto.post("/produtos", ProdutoController.createProduto);
routeProduto.delete("/produtos/:id", ProdutoController.removeProduto);

export default routeProduto;