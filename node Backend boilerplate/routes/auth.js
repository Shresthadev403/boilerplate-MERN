const {Router}=require('express');
const { signUp, signIn } = require('../controllers/auth');
const { signUpValidator, signInValidator } = require('../validator/validator');


router=Router();

router.post('/signup',signUpValidator,signUp);
router.get('/signin',signInValidator,signIn);


module.exports=router;