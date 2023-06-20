const express = require('express');

const router = express.Router();

const {getAllTodoList, 
       CreatTodoList,
       getSingleList,
       EditTodoList,
       deleteTodoList

} = require('../controller/todo')

router.route('/').get(getAllTodoList).post(CreatTodoList)
router.route('/:id').get(getSingleList).patch(EditTodoList).delete(deleteTodoList)




module.exports = router
