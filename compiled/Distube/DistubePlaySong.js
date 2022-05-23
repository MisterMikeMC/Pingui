"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distubeevent = void 0;
const discord_js_1 = require("discord.js");
const Emojis_json_1 = require("../Data/Emojis.json");
exports.distubeevent = {
    name: "playSong",
    run: (_Pingui, queue, song) => {
        queue.textChannel.send({
            embeds: [
                new discord_js_1.MessageEmbed()
                    .setTitle("¡Reproduciendo!")
                    .setDescription(`${Emojis_json_1.Music.Playing} | Reproduciendo ahora: **${song.name}** - \`${song.formattedDuration}\``)
                    .setColor("#5500ff"),
            ],
        });
    },
};
