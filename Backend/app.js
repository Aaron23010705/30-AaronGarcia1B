import express from "express"
import cookieParse from "cookie-parser"
 import clientsRoute from "./src/routes/clients.js"
 import employeeRoute from "./src/routes/employee.js"

const app = express()
app.use(cookieParse())
app.use (express.json());


app.use("/api/clients", clientsRoute)
app.use("/api/employees", employeeRoute)


export default app;