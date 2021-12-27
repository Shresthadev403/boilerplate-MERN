const {Router}=require('express');
const { isAdmin } = require('../controllers/admin');
const { requireSignIn, forgetPassword, resetPassword, hasAuthorization } = require('../controllers/auth');
const { userById, getUser, userUpdate, deleteUser, getAllUsers } = require('../controllers/user');
const { passwordResetValidator, forgetPasswordValidator, passwordValidator, emailValidator } = require('../validator/validator');


router=Router();

// execute this if there is ani parameter in url (userId)
router.param('userId', userById); 


// user routes
router.get('/user/:userId',requireSignIn,getUser);
router.get('/users',requireSignIn,isAdmin,getAllUsers);
router.put('/user/update/:userId',requireSignIn,hasAuthorization,userUpdate);
router.put('/forgetpassword',emailValidator,forgetPassword);
router.put('/resetpassword',passwordValidator,resetPassword);
router.delete('/user/delete/:userId',requireSignIn,deleteUser);


module.exports=router;