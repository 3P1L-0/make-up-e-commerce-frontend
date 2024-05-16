const _BASE_NAME = 'securityQuestions';

export const enum SECURITY_QUESTION_API {

  getById = _BASE_NAME + "/fetchBy/id/",
  fetchByUserId = _BASE_NAME + "/fetch/by/userId/",
  fetchByAccountId = _BASE_NAME + "/fetch/by/userId/",
  fetchAll = _BASE_NAME + "/fetch/all",

  create = _BASE_NAME + "/new",
  createList = _BASE_NAME + "/new/list",
  update = _BASE_NAME + "/update",

  deleteById = _BASE_NAME + "/deleteBy/id/",
  deleteList = _BASE_NAME + "/delete/list",
  deleteByAccountId = _BASE_NAME + "/delete/by/accountId/",
}
