const router = require('express').Router();
const {
  getUsers,
  getUserFriends,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router
  .route('/:userId')
  .get(getSingleUser)
  .get(getUserFriends)
  .put(updateUser)
  .delete(deleteUser);

router
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;