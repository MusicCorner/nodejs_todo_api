export default class TokenModel {
  constructor({
    access,
    refresh,
    created_at,
    life_time
  }) {
    return {
      access,
      refresh,
      createdAt: created_at,
      lifeTime: life_time,
    };
  }
}
