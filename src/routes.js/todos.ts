import { Router } from "express";
import { Todo } from "../models/todo";

type RequestBodyt = { text: string };
type RequestBodyi = { id: string };

const todos: Todo[] = [];

const router = Router();

router.get("/todo", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const body = req.body as RequestBodyt;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  console.log(newTodo);
  todos.push(newTodo);
  res.status(200).json({ todo: newTodo });
});
router.delete("/todo", (req, res, next) => {
  const body = req.body as RequestBodyi;
  const id = body.id;
  const ftodo = todos.findIndex((e, index) => e.id === id);
  console.log(ftodo);
  if (ftodo !== -1) {
    todos.splice(ftodo, 1);
    res
      .status(200)
      .json({ message: "successfully deleted", remainingtodos: todos });
  } else {
    res.status(404).json({ message: "todo not found" });
  }
});
router.post("/edit", (req, res, next) => {
  const body = req.body as { id: string; text: string };
  const id = body.id;
  const ftodo = todos.findIndex((e, index) => e.id === id);

  if (ftodo !== -1) {
    const obj = { ...todos[ftodo] };
    console.log(obj);
    obj.text = body.text;
    todos[ftodo] = obj;

    res
      .status(200)
      .json({ message: "successfully edited", editedtodos: todos });
  } else {
    res.status(404).json({ message: "todo not found" });
  }
});

export default router;
