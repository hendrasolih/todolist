const toDo = require("../models/todolist");

const ToDoController =()=> {
    const getToDos = async (req, res) => {
        
        try {
            const data = await toDo.findAll();    
            return res.status(200).json({
                status: 200,
                data,
                msg: 'to get succes',
              })
        } catch (err) {
            console.log('error nya adalah: ', err);
            return res.status(500).json({ msg: 'Internal server error' });

        }
    }
    return {
        getToDos
    }
}


module.exports = ToDoController;