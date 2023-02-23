"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaController_1 = require("../controllers/empresaController");
const empresaRouter = (0, express_1.Router)();
empresaRouter.get('/info', empresaController_1.getInfo);
exports.default = empresaRouter;
