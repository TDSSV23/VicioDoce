import {} from "dotenv/config.js";
import express from "express";
import cors from "cors";
import routeProduto from "./routes/route.produtos.js";
import routePedido from "./routes/route.pedidos.js";
import routeCliente from "./routes/route.cliente.js";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
app.use(routeProduto);
app.use(routePedido);
app.use(routeCliente);


// Levanta o Servidor
app.listen(process.env.PORT, function(){
    console.log("Servidor executanto na porta", process.env.PORT);
});