const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

// GET /users
router.get("/", async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
});

// POST /users
router.post("/", async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});

module.exports = router;
