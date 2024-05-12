
export const enum CART_API {
  create = "carts/create",
  fetchActiveByOwnerId = "carts/fetch/activeBy/ownerId/",
  fetchActiveByClientId = "carts/fetch/activeBy/clientId/",
  restoreCartByCartId = "carts/restoreBy/cartId/",
  addItemByCartId = "carts/addItemBy/cartId/",
  removeItemByCartId = "carts/removeItemBy/itemId/",
  addListByCartId = "carts/addListBy/cartId/",
  removeItems =  "carts/removeItems",
  updateItem = "carts/updateItem",
  destroyByCartId = "carts/destroyBy/cartId/",
  saveCart = "carts/saveCart",
  checkout = "carts/checkout",
  fetchByState = "carts/fetchBy/state/",
  fetchByOwnerId = "carts/fetchBy/ownerId/",
  fetchByClientId = "carts/fetchBy/clientId/",
}
