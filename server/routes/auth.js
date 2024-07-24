import express from "express"
import {login} from "../controllers/auth.js"

const router= express.Router();

router.post("/login",login);
router.post("/test",(req,res)=>{res.send('<h1> Hello world</h1>')});

export default router;