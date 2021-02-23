const toDoRoutes = {
  "GET /": "toDo.getToDos",
  "GET /:id": "toDo.getToDosById",
  "POST /": "toDo.addToDos",
  "PUT /:id": "toDo.updateToDos",
  "DELETE /:id": "toDo.destroyToDos",
};

module.exports = toDoRoutes;
