"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop = void 0;
let Stop = (Queue) => {
    if (!Queue) {
        return "Error1";
    }
    else {
        Queue.stop();
        return "Stopped";
    }
};
exports.Stop = Stop;
