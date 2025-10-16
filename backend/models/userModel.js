let users = [];
let idCounter = 1;

const findAll = () => {
  return users;
};

const create = (data) => {
  const newUser = { id: idCounter++, ...data };
  users.push(newUser);
  return newUser;
};

module.exports = { findAll, create };
