const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProduct,
  adminGetAllProduct,
  getOneProduct,
  adminUpdateOneProduct,
  adminDeleteOneProduct,
  addReview,
  deleteReview,
  getOnlyReviewsForOneProduct,
} = require("../controllers/productController");
const { isLogedIn, customRole } = require("../middlewares/user");

//User routes
router.route("/products").get(getAllProduct);
router.route("/products/:id").get(getOneProduct);
router.route("/review").put(isLogedIn, addReview);
router.route("/review").delete(isLogedIn, deleteReview);
router.route("/review").get(isLogedIn, getOnlyReviewsForOneProduct);

//Admin routes
router
  .route("/admin/product/add")
  .post(isLogedIn, customRole("admin"), addProduct);

router
  .route("/admin/products")
  .get(isLogedIn, customRole("admin"), adminGetAllProduct);

router
  .route("/admin/product/:id")
  .put(isLogedIn, customRole("admin"), adminUpdateOneProduct)
  .delete(isLogedIn, customRole("admin"), adminDeleteOneProduct);

module.exports = router;
