import express from "express"
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 4200;
import { router as InitRouter } from "./Routes/init.sequelize.router.js"
import { router as UserRouter } from "./Routes/User.router.js"
import { router as AuthRouter } from "./Routes/auth.router.js"
import { router as RecoveryRouter } from "./Routes/recovery.router.js"
import { router as OrginizationRouter } from "./Routes/Orginization.router.js"



app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Authorization, Accept, Accept-Language, X-Authorization, X-Requested-With,content-type");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    // Pass to next layer of middleware
    next();
}); app.use(express.json({ limit: "1mb" }));

app.use(InitRouter)
app.use(RecoveryRouter)
app.use(UserRouter)
app.use(AuthRouter)
app.use(OrginizationRouter)





app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}.`);
});