"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distubeevent = void 0;
const discord_js_1 = require("discord.js");
const Emojis_json_1 = require("../Data/Emojis.json");
exports.distubeevent = {
    name: "finish",
    run: (_Pingui, queue, _song) => {
        queue.textChannel.send({
            embeds: [
                new discord_js_1.MessageEmbed()
                    .setTitle("¡Lista de reproducción finalizada!")
                    .setDescription(`${Emojis_json_1.Util.Yes} | Se finalizó la lista de reproducción!.`)
                    .setColor("#009900"),
            ],
        });
    },
};
