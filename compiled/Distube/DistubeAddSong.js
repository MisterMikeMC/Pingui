"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distubeevent = void 0;
const discord_js_1 = require("discord.js");
const Emojis_json_1 = require("../Data/Emojis.json");
exports.distubeevent = {
    name: "addSong",
    run: (Pingui, queue, song) => {
        queue.textChannel.send({
            embeds: [
                new discord_js_1.MessageEmbed()
                    .setTitle("Añadida a la Queue.")
                    .setDescription(`${Emojis_json_1.Util.Yes} | Se añadio a la lista de reproducción: **${song.name}** - \`${song.formattedDuration}\``)
                    .setColor("#009900"),
            ],
        });
    },
};
