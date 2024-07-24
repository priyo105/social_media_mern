import express from "express"
import {login} from "../controllers/auth.js"

const router= express.Router();

router.post("/login",login);
router.post("/test",(req,res)=>{res.send('Heyyyyy')});

export default router;