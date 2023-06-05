const { Router } = require('express');
const routes = Router();

const registerRouter = require("./registerRoutes");


routes.use("/api/", registerRouter);


module.exports = routes;

