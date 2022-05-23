"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static("src/Express/Public"));
app.get("/", (_, res) => res.sendFile(__dirname + "/Views/index.html"));
app.listen(process.env.PORT || 3005, () => console.log(`Server en linea en el puerto ${process.env.PORT || 3005} ✅`));
