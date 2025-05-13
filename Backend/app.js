import express from "express"
import cookieParse from "cookie-parser"
 
const app = express()
app.use(cookieParse())
app.use (express.json());

export default app;