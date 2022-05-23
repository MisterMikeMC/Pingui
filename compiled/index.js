"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
require("dotenv").config();
const Client_1 = __importDefault(require("./Client"));
new Client_1.default().start();
