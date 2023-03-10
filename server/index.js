import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"
import {register} from './controllers/auth.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import { verifyToken } from "./middleware/auth.js"
import {createPost} from './controllers/posts.js'
/*    Configuration       */

const __filename=fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config() // for using dot env files
const app= express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname,'public.assets')))

// File Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });



//ROUTES with File Upload

app.post("/auth/register",upload.single("picture"), register) //the middle function is a middleware that runs before register
app.post("/posts",verifyToken,upload.single("picture"),createPost)

//Routes 
app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/posts",postRoutes);

//asset files
app.use(express.static('public'))


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

//MONGOOSE SETUP
console.log(process.env.MONGO_URL)
const PORT= process.env.PORT || 6000;
mongoose.connect(process.env.MONGO_URL,{
 useNewUrlParser : true,
 useUnifiedTopology:true
}).then(()=>{
    app.listen(PORT,()=>{console.log(`Server port ${PORT}`)})
}).catch(e=>{console.log("did not connect"+e)})
