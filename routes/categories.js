const categoriesRouter = require('express').Router();

const { sendCategoryCreated, sendCategoryUpdated, sendCategoryById, sendCategoryDeleted, sendAllCategories } = require('../controllers/categories');
const { checkAuth } = require('../middlewares/auth');
const { createCategory, checkEmptyName, checkIsCategoryExists, findAllCategories, updateCategory, findCategoryById, deleteCategory, } = require('../middlewares/categories')


categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
  );
  
  categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
  );

  categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted
  );

module.exports = categoriesRouter;
  