const {Router}=require('express');
const fs=require('fs');


router=Router();


router.get('/api',(req,res)=>{
    fs.readFile('./docs/apidocs.json', (err, data) => {
        if (err) {
         return   res.status(400).json({ error: err });
        }
        
        const docs = JSON.parse(data);
        res.status(200).json(docs);
     });
});

module.exports=router;