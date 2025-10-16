const userModel = require("../models/userModel");

const getAllUsers = async () => {
  return userModel.findAll(); // 임시 데이터
};

const createUser = async (data) => {
  return userModel.create(data); // 임시 데이터
};

module.exports = { getAllUsers, createUser };
