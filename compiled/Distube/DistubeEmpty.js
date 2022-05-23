"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distubeevent = void 0;
exports.distubeevent = {
    name: "empty",
    run: (_Pingui, queue) => {
        queue.textChannel.send({
            content: "El canal esta vacío, me retiro.",
        });
    }
};
