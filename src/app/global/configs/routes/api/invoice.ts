export const enum INVOICE_API {
  fetch = "subcategory/fetch/all",
  fetchByOwnerId = "invoice/fetchBy/owner/",
  fetchByClientId = "invoice/fetchBy/clientId/",
  getByNumber = "invoice/fetchBy/number/",
  getById = "subcategory/fetchBy/id/",
  getByAppointmentId = "invoice/fetchBy/appointmentId/",

  deleteById = "subcategory/deleteBy/id/",
  deleteList = "subcategory/deleteBy/list",
  create = "subcategory/new",
  createList = "subcategory/new/list",
  update = "subcategory/update"
}
