const {Router}=require('express');
const { requireSignIn, forgetPassword, resetPassword } = require('../controllers/auth');
const { userById, getUser, userUpdate, deleteUser } = require('../controllers/user');
const { passwordResetValidator, forgetPasswordValidator } = require('../validator/validator');


router=Router();

// execute this if there is ani parameter in url (userId)
router.param('userId', userById); 


// user routes
router.get('/user/:userId',requireSignIn,getUser);
router.put('/user/update/:userId',requireSignIn,userUpdate);
router.put('/forgetpassword',forgetPasswordValidator,forgetPassword);
router.put('/resetpassword',passwordResetValidator,resetPassword);
router.delete('/user/delete/:userId',requireSignIn,deleteUser);


module.exports=router;