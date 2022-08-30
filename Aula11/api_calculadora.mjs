import express from "express";
const app = express();
const port = 8080;

import {soma, mul, div, sub} from "./calculadora.mjs";

app.get("/soma/:a/:b", (req, res) => {
    const {a, b} = req.params;
    res.end(`${a} + ${b} = ${soma(parseInt(a), parseInt(b))}`);
});

app.get("/sub/:a/:b", (req, res) => {
    const {a, b} = req.params;
    res.end(`${a} - ${b} = ${sub(parseInt(a), parseInt(b))}`);
});

app.get("/div/:a/:b", (req, res) => {
    const {a, b} = req.params;
    res.end(`${a} / ${b} = ${div(parseInt(a), parseInt(b))}`);
});

app.get("/mul/:a/:b", (req, res) => {
    const {a, b} = req.params;
    res.end(`${a} * ${b} = ${mul(parseInt(a), parseInt(b))}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`)
});