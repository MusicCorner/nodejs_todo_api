export default class ToDoModel {
  constructor({
    id,
    text,
    status,
    created_at,
  }) {
    return {
      id,
      text,
      status,
      createdAt: created_at,
    };
  }
}
