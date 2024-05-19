const usersRouter = require('express').Router();
  
const { sendUserCreated, sendUserUpdated, sendUserDeleted, sendUserById, sendAllUsers, sendMe } = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');
const { findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, createUser, checkEmptyNameAndEmail, updateUser, deleteUser, findUserById, hashPassword } = require('../middlewares/users')
  
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated,
  );
  
  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
  );

  usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
  );
  
 module.exports = usersRouter;