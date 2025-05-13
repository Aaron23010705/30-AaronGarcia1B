import express from "express"
 import clientsRoute from "./src/routes/clients.js"
 import employeeRoute from "./src/routes/employee.js"
 import filmRoute from "./src/routes/film.js"
 import registerEmployeesRoutes from "./src/routes/registerEmployee.js"
 import loginRoutes from "./src/routes/login.js";
 import logoutRoutes from "./src/routes/logout.js";
 import registerClients from "./src/routes/registerClient.js";
 import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";
 import cookieParser from "cookie-parser";

const app = express()
app.use(cookieParser())
app.use (express.json());


app.use("/api/clients", clientsRoute)
app.use("/api/employees", employeeRoute)
app.use("/api/film", filmRoute)
app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/registerClients", registerClients);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);

           

export default app;