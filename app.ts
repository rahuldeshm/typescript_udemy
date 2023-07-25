import express from "express";
import todosRoutes from "./routes.js/todos";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use("/todo", todosRoutes);

app.listen(3000);
