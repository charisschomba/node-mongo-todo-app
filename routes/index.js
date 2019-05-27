import { Router} from 'express';
import Todo from '../models';
import Logger from '../middlewares';


const router = Router();

router.route('/todo')
  .get(async (req, res) => {
    await Todo.find((error, todos) =>{
      if (error) return res.status(404).json({"error":"no todos"});
      return res.status(200).json(todos)
    })
  })
  .post(Logger,(req, res) => {
    const { name, note} = req.body;
    const newTodo = new Todo({
      name,
      note
    });
    try {
      newTodo.save();
      return res.status(200).json(newTodo)
    }catch (error) {
      return res.status(500).json({error: "something went wrong try again"})
    }
  })
  .put((req, res) => {
    const { id } = req.body;
    const updatedTodo = delete req.body.id;
    Todo.findByIdAndUpdate(
      id,
      req.body,
    {new: true},
      (err, todo) => {
        if (err) return res.status(500).json(err);
        return res.status(200).send(todo);
      }
      )
  })
  .delete((req, res) => {
    const { id } = req.body;
    Todo.findByIdAndDelete(
      id,
      (err, todo) => {
        if (err) return res.status(500).json(err);
        return res.status(200).send({
          message: "Todo successfully deleted",
          id: todo._id
        });
      }
    )
  });

export default router;
