export default class UserModel {
  constructor({
    id,
    name,
    todos_count,
  }) {
    return {
      id,
      name,
      todosCount: todos_count,
    };
  }
}
