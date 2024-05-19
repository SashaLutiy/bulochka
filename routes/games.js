const gamesRouter = require('express').Router();


const { sendGameCreated, sendGameUpdated, sendGameDeleted, sendGameById, sendAllGames } = require('../controllers/games');
const { checkAuth } = require('../middlewares/auth');
const { createGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIsGameExists, findAllGames, findGameById, checkIfUsersAreSafe, updateGame, deleteGame, checkIsVoteRequest } = require('../middlewares/games')

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  );

  gamesRouter.delete(
    "/games/:id", 
    checkAuth,
    deleteGame,
    sendGameDeleted 
  ); 

module.exports = gamesRouter;