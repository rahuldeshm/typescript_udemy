"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get("/todo", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    console.log(newTodo);
    todos.push(newTodo);
    res.status(200).json({ todo: newTodo });
});
router.delete("/todo", (req, res, next) => {
    const id = req.body.id;
    const ftodo = todos.findIndex((e, index) => e.id === id);
    console.log(ftodo);
    if (ftodo !== -1) {
        todos.splice(ftodo, 1);
        res
            .status(200)
            .json({ message: "successfully deleted", remainingtodos: todos });
    }
    else {
        res.status(404).json({ message: "todo not found" });
    }
});
router.post("/edit", (req, res, next) => {
    const id = req.body.id;
    const ftodo = todos.findIndex((e, index) => e.id === id);
    if (ftodo !== -1) {
        const obj = Object.assign({}, todos[ftodo]);
        console.log(obj);
        obj.text = req.body.text;
        todos[ftodo] = obj;
        res
            .status(200)
            .json({ message: "successfully edited", editedtodos: todos });
    }
    else {
        res.status(404).json({ message: "todo not found" });
    }
});
exports.default = router;
