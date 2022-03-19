/** @format */

const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOneOrder,
  getLoggedInOrders,
  adminGetAllOrders,
  adminDeleteOrder,
  adminUpdateOrder,
} = require("../controllers/orderController");
const { isLogedIn, customRole } = require("../middlewares/user");

router.route("/order/create").post(isLogedIn, createOrder);
router.route("/myorder").get(isLogedIn, getLoggedInOrders);
router.route("/order/:id").get(isLogedIn, getOneOrder);

router
  .route("/admin/orders")
  .get(isLogedIn, customRole("admin"), adminGetAllOrders);

router
  .route("/admin/orders/:id")
  .put(isLogedIn, customRole("admin"), adminUpdateOrder)
  .delete(isLogedIn, customRole("admin"), adminDeleteOrder);

module.exports = router;
