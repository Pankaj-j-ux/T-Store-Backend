const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  logout,
  forgotPassword,
  passwordReset,
  getLoggedInUserDetails,
  changePassword,
  updateUserDetails,
  adminAllUser,
  managerAllUser,
  adminGetOneUser,
  adminUpdateOneUserDetails,
  adminDeleteOneUser,
} = require("../controllers/userController");
const { isLogedIn, customRole } = require("../middlewares/user");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/forgotpassword").post(forgotPassword);
router.route("/password/reset/:token").post(passwordReset);
router.route("/userdashboard").get(isLogedIn, getLoggedInUserDetails);
router.route("/password/update").post(isLogedIn, changePassword);
router.route("/userdashboard/update").post(isLogedIn, updateUserDetails);

// ADMIN only routes
router.route("/admin/users").get(isLogedIn, customRole("admin"), adminAllUser);
router
  .route("/admin/user/:id")
  .get(isLogedIn, customRole("admin"), adminGetOneUser)
  .put(isLogedIn, customRole("admin"), adminUpdateOneUserDetails)
  .delete(isLogedIn, customRole("admin"), adminDeleteOneUser);

//MANAGER only route
router
  .route("/manager/users")
  .get(isLogedIn, customRole("manager"), managerAllUser);

module.exports = router;
