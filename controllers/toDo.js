const { isEmpty, isNull } = require("lodash");
const toDo = require("../models/todolist");

const ToDoController = () => {
  const getToDos = async (_, res) => {
    try {
      const data = await toDo.findAll({
        attributes: ["id", "to_do"],
      });
      return res.status(200).json({
        status: 200,
        data,
        msg: "to get succes",
      });
    } catch (err) {
      console.log("error: ", err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const getToDosById = async (req, res) => {
    try {
      //const data = await toDo.findByPk(req.params.id);
      const data = await toDo.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["id", "to_do"],
      });
      if (data == null) {
        return res.status(404).json({
          status: 404,
          msg: "data not found",
        });
      }
      return res.status(200).json({
        status: 200,
        data,
        msg: "to get succes",
      });
    } catch (err) {
      console.log("error: ", err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const addToDos = async (req, res) => {
    try {
      const { to_do: todo } = req.body;
      //const { todo } = req.body;
      const data = await toDo.create({
        to_do: todo,
      });
      //console.log(data);
      return res.status(200).json({
        status: 200,
        data,
        msg: "add todo success",
      });
    } catch (err) {
      console.log("error: ", err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const updateToDos = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await toDo.update(req.body, { where: { id } });
      //const data = await toDo.findByPk(id);
      //   console.log(data[0] === 0);
      //   console.log(isNull(data));
      if (data[0] === 0) {
        return res.status(404).json({ status: 200, msg: "Data not found" });
      }
      return res.status(200).json({
        status: 200,
        msg: "Success update to Do",
      });
    } catch (err) {
      console.log("error: ", err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const destroyToDos = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await toDo.destroy({ where: { id } });
      if (data === 0) {
        return res.status(404).json({ status: 200, msg: "Data not found" });
      }
      return res.status(200).json({ status: 200, msg: "Success delete" });
    } catch (err) {
      console.log("error: ", err);
      return res.status(500).json({
        status: 500,
        msg: "Internal server error something went wrong",
      });
    }
  };

  return {
    getToDos,
    getToDosById,
    addToDos,
    updateToDos,
    destroyToDos,
  };
};

module.exports = ToDoController;
