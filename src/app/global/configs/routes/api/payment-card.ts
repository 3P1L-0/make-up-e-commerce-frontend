export const enum PAYMENT_CARD_API {
  fetchByUserId = 'cards/fetchBy/userId/',
  getById = 'cards/fetchBy/id/',
  fetchByCardNumber = 'cards/fetchBy/cardNumber/',
  fetchAll = 'cards/fetch/all',
  create = 'cards/new',
  createList = 'cards/new/list',
  update = 'cards/update',
  deleteById = 'cards/deleteBy/id/{id}',
  deleteList = 'cards/delete/list',
}
