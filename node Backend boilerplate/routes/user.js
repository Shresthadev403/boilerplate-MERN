const {Router}=require('express');
const { requireSignIn } = require('../controllers/auth');
const { userById, getUser, userUpdate, deleteUser } = require('../controllers/user');


router=Router();

// execute this if there is ani parameter in url (userId)
router.param('userId', userById); 


// user routes
router.get('/user/:userId',requireSignIn,getUser);
router.put('/user/update/:userId',requireSignIn,userUpdate);
router.delete('/user/delete/:userId',requireSignIn,deleteUser);

module.exports=router;