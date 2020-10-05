import ToDoModel from './ToDoModel';

export default class ToDosModel {
  constructor(todosArray) {
    return todosArray.map(_todo => new ToDoModel(_todo));
  }
}
