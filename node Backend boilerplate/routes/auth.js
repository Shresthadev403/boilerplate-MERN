const {Router}=require('express');
const { signUp, signIn, requireSignIn, signOut, socialLogin } = require('../controllers/auth');
const { signUpValidator, signInValidator } = require('../validator/validator');


router=Router();

router.post('/signup',signUpValidator,signUp);
router.post('/sociallogin',socialLogin);
router.get('/signin',signInValidator,signIn);
router.get('/signout',requireSignIn,signOut)

module.exports=router;