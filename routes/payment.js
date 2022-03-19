const express = require("express");
const router = express.Router();

const {
  sendRazorpayKey,
  sendStripeKey,
  captureRazorpayPayment,
  captureStripePayment,
} = require("../controllers/paymentController");
const { isLogedIn, customRole } = require("../middlewares/user");

router.route("/stripekey").get(isLogedIn, sendStripeKey);
router.route("/razorpaykey").get(isLogedIn, sendRazorpayKey);

router.route("/capturestripe").get(isLogedIn, captureStripePayment);
router.route("/capturerazorpay").get(isLogedIn, captureRazorpayPayment);

module.exports = router;
