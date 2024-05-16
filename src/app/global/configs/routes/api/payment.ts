export const enum PAYMENT_API {
  fetch = "payments/fetch/all",
  getById = "payments/fetchBy/id/",
  fetchByOperatorId = "payments/fetchBy/operadorId/",
  fetchByFacturaId = "payments/fetchBy/facturaId/",
  deleteById = "payments/deleteBy/id/",
  deleteList = "payments/deleteBy/list",
  create = "payments/new",
  createList = "payments/new/list",
  update = "payments/update"
}
