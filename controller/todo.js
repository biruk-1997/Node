const Todo = require('../modele/todo')

const getAllTodoList = async (req, res)=>{
    try {
        const todo = await Todo.find({})
        res.status(200).json({todo})
       //res.send('all list')
    } catch (error) {
        res.status(500).json({msg: error })
    }
    
    
}
const CreatTodoList = async (req, res)=>{
   // res.send('create')
   
   try {
    const todo = await Todo.create(req.body)
    res.status(200).json({todo})
   } catch (error) {
    res.status(500).json({msg: error })
   }
    }


const getSingleList = async (req,res)=>{
    try {
        const {id:taskId} = req.params
        const todo = await Todo.findOne({_id:taskId})
        if(!todo){
        return res.status(400).json({msg: `no list is registered with this id${todoId}`})

      }
      res.status(200).json({todo})
    } catch (error) {
        res.status(500).json({msg: "something ain't right"})
    }
}


const EditTodoList = async(req, res)=>{
    try {
        const {id:todoId}= req.params
        const todo = await Todo.findByIdAndUpdate({_id:todoId}, req.body)
      if(!todo){
        return res.status(400).json({msg: `no list is registered with this id${todoId}`})

      }
      res.status(200).json({todo})
    } catch (error) {
        res.status(500).json({msg: "something ain't right"})
    }
}
const deleteTodoList = async(req, res)=>{
    //res.send('delete a list')
    try {
        const {id:todoId} = req.params
        const todo = await Todo.findByIdAndDelete({_id:todoId})
     if(!todo){
        return res.status(400).json({msg: `no list is registered with this id${todoId}`})

     }
     res.status(200).json({todo})
    } catch (error) {
        res.status(500).json({msg: "something ain't right"})

    }
                }
module.exports = {
    getAllTodoList, 
    CreatTodoList, 
    getSingleList, 
    EditTodoList, 
    deleteTodoList
}