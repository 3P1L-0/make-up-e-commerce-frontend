const _BASE_NAME = 'securityQuestions';

export const enum SECURITY_QUESTION_API {

  getById = "securityQuestions/fetchBy/id/",
  fetchByUserId = "securityQuestions/fetch/by/userId/",
  fetchByAccountId = "securityQuestions/fetch/by/userId/",
  fetchAll = "securityQuestions/fetch/all",

  create = "securityQuestions/new",
  createList = "securityQuestions/new/list",
  update = "securityQuestions/update",

  deleteById = "securityQuestions/deleteBy/id/",
  deleteList = "securityQuestions/delete/list",
  deleteByAccountId = "securityQuestions/delete/by/accountId/",
}
