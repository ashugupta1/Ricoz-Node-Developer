const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getUsers); // GET /api/users
router.post("/", createUser); // POST /api/users
router.put("/:id", updateUser); // PUT /api/users/:id

module.exports = router;
